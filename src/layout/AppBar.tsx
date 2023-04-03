import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import {Link} from "react-router-dom";

const pages = ['posts', 'users'];

const MyAppBar = (): JSX.Element => (
    <AppBar position="static">
        <Container maxWidth="xl">
            <Toolbar disableGutters>
                <Box sx={{flexGrow: 1, display: {xs: 'none', md: 'flex'}}}>
                    {pages.map((page) => (
                        <Button
                            component={Link}
                            to={page}
                            key={page}
                            sx={{my: 2, color: 'white', display: 'block'}}
                        >
                            {page}
                        </Button>
                    ))}
                </Box>
            </Toolbar>
        </Container>
    </AppBar>
);

export default MyAppBar;
