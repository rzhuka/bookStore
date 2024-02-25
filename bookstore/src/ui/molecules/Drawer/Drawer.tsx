import { PropsWithChildren } from "react";
import { useTheme } from '@mui/material/styles';
import MuiDrawer, { DrawerProps } from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import DrawerHeader from "./DrawerHeader";



type Props = DrawerProps & {
    readonly onClose: () => void;
};

const Drawer = ({ children, onClose, ...props }: PropsWithChildren<Props>) => {
    const theme = useTheme();

    const container = () => document.body

    return (
        <MuiDrawer
            onClose={onClose}
            container={container}
            {...props}

            sx={{

                '& .MuiDrawer-paper': {
                    boxSizing: 'border-box',
                    width: 240
                },
            }}
        >
            <DrawerHeader>
                <IconButton
                    onClick={onClose}
                >
                    {theme.direction === 'ltr'
                        ? <ChevronLeftIcon />
                        : <ChevronRightIcon />}
                </IconButton>
            </DrawerHeader>
            <Divider />
            {children}
        </MuiDrawer>
    );
};

export default Drawer;