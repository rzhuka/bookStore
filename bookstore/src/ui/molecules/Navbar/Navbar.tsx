import { memo } from "react";
import Box from "@mui/material/Box";
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import AddIcon from '@mui/icons-material/Add';
import { Link } from "react-router-dom";
import { Routes } from "config/routes";

const Navbar = () => {
    return (
        <Box>
            <Divider />
            <List>
                <ListItem disablePadding>
                    <ListItemButton
                        component={Link}
                        to={Routes.Add}
                    >
                        <ListItemIcon>
                            <AddIcon />
                        </ListItemIcon>
                        <ListItemText primary='Add new book' />
                    </ListItemButton>
                </ListItem>
            </List>
            <Divider />

        </Box>
    );
};

export default memo(Navbar);