
import Box from '@mui/material/Box';
import { useContext } from 'feature/product';
import { useParams } from 'react-router-dom';
import MuiCard from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Logo from 'assets/logo512.png'
import { Button } from '@mui/material';
import { withBreadcrumbs } from 'ui/layouts/Breadcrumbs';
import { Routes } from 'config/routes';
import Card from 'ui/molecules/Card';

const ShowProduct = () => {
    const { selectBook, addToFavourite, getFavouriteBooks } = useContext();
    const { categoryId } = useParams();

    const book = selectBook(categoryId!);

    return (
        <>
            {Boolean(book) && (
                <Box>
                    <MuiCard
                        sx={{
                            display: 'flex',
                            mb: 2,
                            mt: 2
                        }} >
                        <CardMedia
                            component="img"
                            image={Logo}
                            alt="Book copertine"
                            sx={{
                                height: '300px',
                                width: '300px'
                            }}
                        />

                        <CardContent>
                            <Typography
                                variant='h5'
                                component='div'
                                sx={{ mb: 1.5 }}
                            >
                                {book?.title}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {book?.description}
                            </Typography>
                            <Button
                                size="small"
                                onClick={() => addToFavourite(book!)}
                            >
                                Add to favourites
                            </Button>
                            <Button
                                size="small"
                            >
                                Share
                            </Button>

                            <Box sx={{
                                display: 'flex',
                                mt: 1.5

                            }}>
                                <Typography
                                    sx={{
                                        fontSize: 14,
                                        mr: 1.5
                                    }}
                                    color='text.secondary'
                                    gutterBottom
                                >
                                    Number of Pages:
                                </Typography>
                                <Typography
                                    sx={{
                                        fontSize: 14
                                    }}
                                    color='text.secondary'
                                    gutterBottom
                                >
                                    {book?.pages}
                                </Typography>
                            </Box>
                            <Box sx={{
                                display: 'flex',

                            }}>
                                <Typography
                                    sx={{
                                        fontSize: 14,
                                        mr: 1.5
                                    }}
                                    color='text.secondary'
                                    gutterBottom
                                >
                                    Publisher:
                                </Typography>
                                <Typography
                                    sx={{
                                        fontSize: 14
                                    }}
                                    color='text.secondary'
                                    gutterBottom
                                >
                                    {book!.publisher}
                                </Typography>
                            </Box>
                        </CardContent>
                    </MuiCard>
                    <Typography
                        variant='h5'
                        textAlign='center'
                    >
                        You may also like
                    </Typography>
                    <Box
                        sx={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            justifyContent: 'flex-start',
                            gap: 2,
                            width: '100%',
                            mt: 1.5
                        }}
                    >
                        {getFavouriteBooks()
                            .map(({ isbn, ...restProps }) => (
                                <Card
                                    {...restProps}
                                    isbn={isbn}
                                    key={isbn}
                                />
                            ))}
                    </Box>
                </Box>
            )}
        </>
    );
};

export default withBreadcrumbs(ShowProduct, _ => ({
    parentLinks: [
        {
            to: Routes.Root,
            label: 'Home'
        },
        {
            to: Routes.Search,
            label: 'Search'
        }
    ],
    currentView: {
        label: 'Category'
    }
}));
