import { memo } from "react";
import Box from "@mui/material/Box";
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import AddIcon from '@mui/icons-material/Add';

const Navbar = () => {
    return (
        <Box>
            <Divider />
            <List>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                               <AddIcon/>
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