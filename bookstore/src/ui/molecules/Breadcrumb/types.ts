import type { ReactNode } from 'react';
import type { BreadcrumbsProps as MuiBreadcrumbsProps } from '@mui/material/Breadcrumbs';
import type { LinkProps } from 'react-router-dom'; 

export type View = {
    readonly label?: ReactNode;
};

export type BreadcrumbProps = MuiBreadcrumbsProps & {
    readonly parentLinks: ReadonlyArray<LinkProps & View>;
    readonly currentView: View;
};
