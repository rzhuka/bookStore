import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Container from '@mui/material/Container';
import MuiToolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from "../Drawer";
import Navbar from "../Navbar";

type Props = {
    readonly onClick: () => void;
    readonly open: boolean
};
const Header = ({ onClick, open }: Props) => {
    return (
        <>
            <AppBar
                position="fixed"
                component='nav'
            >
                <Container>
                    <MuiToolbar
                        sx={{
                            paddingLeft: 0,
                            justifyContent: 'space-between',
                            alignItems: 'center'
                        }}
                    >
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            onClick={onClick}
                            edge="start"
                            sx={{
                                justifySelf: 'flex-end',
                            }}
                        >
                            <MenuIcon />
                        </IconButton>

                        <Typography
                            variant="h6"
                            noWrap
                            component="div"
                        >
                            Bookstore
                        </Typography>

                    </MuiToolbar>
                </Container>
            </AppBar>
            <Box component='nav'>
                <Drawer
                    open={open}
                    onClose={onClick}
                    variant="temporary"
                    anchor="left"
                >
                    <Navbar />
                </Drawer>
            </Box>
        </>
    );
}

export default Header;