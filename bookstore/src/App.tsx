import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { Experimental_CssVarsProvider as CssVarsProvider } from '@mui/material/styles';
import { RouterProvider } from 'react-router-dom';
import router from 'infrastructure/router';
import theme from 'infrastructure/mui-theme';

const App = () => (
    <React.StrictMode>
        <CssVarsProvider theme={theme}>
            <CssBaseline />
            <RouterProvider router={router} />
        </CssVarsProvider>
    </React.StrictMode>
);

export default App;