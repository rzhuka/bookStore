import { createBrowserRouter, Navigate } from "react-router-dom";
import { Routes } from "config/routes";
import Root from "ui/layouts/Root";
import AddProduct from "ui/organizim/AddProduct";
import SearchProduct from "ui/organizim/SearchProduct";
import ShowProduct from "ui/organizim/ShowProduct";


export default createBrowserRouter([
    {
        path: Routes.Root,
        element: (
            <Root />
        ),
        children: [
            {
                index: true,
                element: (
                    <Navigate
                        to={Routes.Search}
                        replace
                    />
                )
            },
            {
                path: Routes.Search,
                element: (
                    <SearchProduct />
                ),
            },
            {
                path: Routes.Add,
                element: (
                    <AddProduct />
                ),
            },
            {
                path: `${Routes.Category}/:categoryId`,
                element: (
                    <ShowProduct />
                ),
            },
        ],
    },
]);