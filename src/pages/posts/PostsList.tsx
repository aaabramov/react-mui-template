import {QUERY_KEYS, useApi} from "../../utils/api";
import {useQuery} from "@tanstack/react-query";
import {Box, Button, Divider, Typography} from "@mui/material";
import React from "react";
import {Link} from "react-router-dom";


export const PostsList = () => {

    const {postsApi} = useApi();

    const {data: posts, isLoading} = useQuery({queryKey: QUERY_KEYS.POSTS.ALL, queryFn: postsApi.all})

    return (
        <Box>
            <h2>Posts</h2>
            <ul>
                {
                    posts?.map((post) => (
                        <li>
                            <Typography
                                key={post.id}
                                component={Link}
                                to={`${post.id}`}
                            >
                                {post.title} by {post.user.nickname}
                            </Typography>
                        </li>
                    ))
                }
            </ul>
            <Divider/>
            <Button variant="outlined" component={Link} to="new">
                Create new post
            </Button>
        </Box>
    );
}
