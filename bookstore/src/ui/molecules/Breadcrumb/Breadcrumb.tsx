import Breadcrumbs from '@mui/material/Breadcrumbs';
import MuiLink from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import type { BreadcrumbProps } from './types';

const Breadcrumb = ({ parentLinks, currentView, ...breadcrumbsProps }: BreadcrumbProps) => (
    <Breadcrumbs
        aria-label="breadcrumb"
        {...breadcrumbsProps}
    >
        {parentLinks.map(({ label, ...linkProps }, index) => (
            <MuiLink
                key={index}
                {...linkProps}
                component={Link}
            >
                {label}
            </MuiLink>
        ))}
        <Typography>
            {currentView.label}
        </Typography>
    </Breadcrumbs>
);

export default Breadcrumb;