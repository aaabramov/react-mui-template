import {QUERY_KEYS, useApi} from "../../utils/api";
import {useQuery} from "@tanstack/react-query";
import {Box, Divider, Typography} from "@mui/material";
import React from "react";
import {Loading} from "../../layout/Loading";
import {useParams} from "react-router-dom";


export interface PostProps {
}

export const Post = ({}: PostProps): JSX.Element => {

    const {paramPostId} = useParams();
    const postId = Number(paramPostId)

    const {postsApi} = useApi();

    const {data: post, isLoading} = useQuery({
        queryKey: QUERY_KEYS.POSTS.SINGLE(postId),
        queryFn: () => postsApi.one(postId)
    })

    if (isLoading) {
        return <Loading/>
    }

    return (
        <Box>
            <Typography variant="h2">Post #{post!.id} by {post!.user.nickname}</Typography>
            <Divider/>
            <Typography>{post!.title}</Typography>
        </Box>
    );
}
