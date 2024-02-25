import { memo } from "react";
import MuiCard from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import type { Book } from "feature/product/types";
import router from "infrastructure/router";
import { Routes } from "config/routes";
import { Link } from "react-router-dom";

type Props = Pick<
    Book,
    | 'title'
    | 'description'
    | 'author'
    | 'subtitle'
    | 'publisher'
    | 'isbn'
>

const Card = ({
    publisher,
    title,
    author,
    description,
    isbn,
}: Props) => (
    <MuiCard
        sx={{
            maxWidth: 300,
            width: '100%'
        }}
    >
        <CardContent>
            <Typography
                sx={{
                    fontSize: 14
                }}
                color='text.secondary'
                gutterBottom
            >
                {publisher}
            </Typography>
            <Typography
                variant='h5'
                component='div'
            >
                {title}
            </Typography>
            <Typography
                sx={{ mb: 1.5 }}
                color='text.secondary'
            >
                {author}
            </Typography>
            <Typography
                variant='body2'
                sx={{
                    display: '-webkit-box',
                    WebkitBoxOrient: 'vertical',
                    WebkitLineClamp: 3,
                    overflow: 'hidden',
                    textOverflow: 'ellipsis'
                }}
            >
                {description}
            </Typography>
        </CardContent>
        <CardActions>
            <Link to={`${Routes.Category}/${isbn}`}> Learn More</Link>
            {/* <Button 
                 href={Routes.Category} 
                size="small"
                onClick={()=> selectBook(isbn)}
            >

                Learn More

            </Button> */}
        </CardActions>
    </MuiCard >
);

export default memo(Card);