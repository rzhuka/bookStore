import type { ComponentType } from "react";
import type { BreadcrumbProps } from "ui/molecules/Breadcrumb";
import Breadcrumbs from "./Breadcrumbs";

const withBreadcrumbs = <TProps extends object>(Component: ComponentType, getBreadcrumbsProps: (t?: Function) => BreadcrumbProps) => (props: TProps) => {


    return (
        <Breadcrumbs
            sx={{
                paddingLeft: '50px'
            }}
            {...getBreadcrumbsProps()}
        >
            <Component
                {...props}
            />
        </Breadcrumbs>
    )
};

export default withBreadcrumbs;
