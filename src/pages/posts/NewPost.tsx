import {QUERY_KEYS, useApi} from "../../utils/api";
import {useMutation, useQuery, useQueryClient} from "@tanstack/react-query";
import {Box, Button, Divider, Typography} from "@mui/material";
import React from "react";
import {Loading} from "../../layout/Loading";
import {useNavigate, useParams} from "react-router-dom";


export interface NewPostProps {
}

export const NewPost = ({}: NewPostProps): JSX.Element => {

    const {paramPostId} = useParams();
    const postId = Number(paramPostId)

    const navigation = useNavigate();

    const queryClient = useQueryClient()
    const {postsApi, usersApi,} = useApi();

    const {data: users, isLoading} = useQuery({
        queryKey: QUERY_KEYS.USERS.ALL,
        queryFn: usersApi.all
    });

    const mutation = useMutation({
        mutationFn: () => {
            return postsApi.create({
                title: 'New post ' + new Date().toISOString(),
                userId: users![0].id
            })
        },
        onSuccess: () => {
            // Invalidate and refetch
            queryClient.invalidateQueries({queryKey: QUERY_KEYS.POSTS.ALL})
            navigation('/posts');
        },
    });

    if (isLoading) {
        return <Loading/>
    }

    return (
        <Box>
            <Typography variant="h2">Create new post</Typography>
            <Divider/>
            <Button variant="contained"
                    onClick={() => mutation.mutate()}
            >
                Create new post
            </Button>
        </Box>
    );
}
