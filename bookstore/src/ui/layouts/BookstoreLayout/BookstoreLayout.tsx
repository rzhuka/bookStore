
import { Outlet } from "react-router-dom";
import Header from "ui/molecules/Header";
import Footer from "ui/molecules/Footer";
import Box from "@mui/material/Box";

const BookstoreLayout = () => (
    <Box>
        <Header />
        <Outlet />
        <Footer />
    </Box>
);

export default BookstoreLayout;