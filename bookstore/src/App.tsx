import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { Experimental_CssVarsProvider as CssVarsProvider } from '@mui/material/styles';
import { RouterProvider } from 'react-router-dom';
import router from 'infrastructure/router';
import theme from 'infrastructure/mui-theme';
import ProductProvider from 'feature/product';

const App = () => (
    <React.StrictMode>
        <CssVarsProvider theme={theme}>
            <CssBaseline />
            <ProductProvider>
                <RouterProvider router={router} />
            </ProductProvider>
        </CssVarsProvider>
    </React.StrictMode>
);

export default App;