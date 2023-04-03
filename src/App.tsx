import React, {useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {Box, Button, Container, Divider, Typography} from "@mui/material";
import {QUERY_KEYS, useApi} from "./utils/api";
import {useQuery} from "@tanstack/react-query";
import AppBar from "./layout/AppBar";
import {createBrowserRouter, Outlet, Route, RouterProvider, Routes} from 'react-router-dom';
import {PostsList} from "./pages/posts/PostsList";
import {Post} from "./pages/posts/Post";
import {NewPost} from "./pages/posts/NewPost";

export const AppStubPage = ({name}: { name: string }) => <Box>The page: {name}</Box>;

const AppRoot = () => (
    <Container>
        <AppBar/>
        <Divider/>
        <Outlet/>
    </Container>
);

const router = createBrowserRouter([
    {
        path: "/",
        element: <div>Hello world!</div>,
    },
]);

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<AppRoot/>}>
                <Route path="posts">
                    <Route index element={<PostsList/>}/>
                    <Route path="new" element={<NewPost/>}/>
                    <Route path=":paramPostId" element={<Post/>}/>
                </Route>
                <Route path="users">
                    <Route index element={<AppStubPage name="Users index"/>}/>
                </Route>
            </Route>
        </Routes>
    )
};

export default App
