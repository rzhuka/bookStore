import { useState } from "react";
import { Outlet } from "react-router-dom";
import Container from '@mui/material/Container';
import Box from "@mui/material/Box";
import Header from "ui/molecules/Header";
import Footer from "ui/molecules/Footer";

const Root = () => {
    const [isNavbarOpen, setIsNavbarOpen] = useState(false)

    return (
        <Box>
            <Header open={isNavbarOpen} onClick={() => setIsNavbarOpen(!isNavbarOpen)} />
            <Container
                component='main'
                sx={{
                    py: 15,
                }}
            >
                <Outlet />
            </Container>
            <Footer />
        </Box>
    );
}

export default Root;
