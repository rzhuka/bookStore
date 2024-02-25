import type { PropsWithChildren } from "react";
import type { BreadcrumbProps } from "ui/molecules/Breadcrumb";
import Breadcrumb from "ui/molecules/Breadcrumb";

const Breadcrumbs = ({ children, ...breadcrumbProps }: PropsWithChildren<BreadcrumbProps>) => (
    <>
        <Breadcrumb
            {...breadcrumbProps}
        />
        {children}
    </>
);

export default Breadcrumbs;
