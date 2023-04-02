import {useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {Box, Button, Container, Typography} from "@mui/material";

function App() {
    const [count, setCount] = useState(0)

    return (
        <Container>
            <Box sx={{my: 4}}>
                <Typography variant="h4" component="h1" gutterBottom>
                    Material UI Vite.js example in TypeScript
                </Typography>
            </Box>
            <div>
                <a href="https://vitejs.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo"/>
                </a>
                <a href="https://reactjs.org" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo"/>
                </a>
            </div>
            <h1>Vite + React</h1>
            <div className="card">
                <Button
                    color="primary"
                    variant="contained"
                    onClick={() => setCount((count) => count + 1)}
                >
                    count is {count}
                </Button>
            </div>
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>
        </Container>
    )
}

export default App
