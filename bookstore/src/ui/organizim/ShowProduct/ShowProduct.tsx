
import Box from '@mui/material/Box';
import useActions from 'feature/product/useActions';
import { useParams } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Logo from 'assets/logo512.png'
import { Button } from '@mui/material';

const ShowProduct = () => {
    const actions = useActions();
    const { selectBook } = actions
    let { categoryId } = useParams();
    console.log('selectedBook', categoryId, selectBook(categoryId))
    const { title, description, publisher, pages } = selectBook(categoryId)!
    return (
        <Box>
            <Card
                sx={{
                    display: 'flex'
                }} >
                <CardMedia
                    component="img"
                    height="400"
                    width="400"
                    image={Logo}
                    alt="green iguana"
                />

                <CardContent>
                    <Typography
                        variant='h5'
                        component='div'
                        sx={{ mb: 1.5 }}
                    >
                        {title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {description}
                    </Typography>
                    <CardActionArea>
                        <Button
                            size="small"
                        >
                            Add to favourites
                        </Button>
                        <Button
                            size="small"
                        >
                            Share
                        </Button>
                    </CardActionArea>
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
                            {pages}
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
                            {publisher}
                        </Typography>
                    </Box>
                    <CardActionArea>
                        <Button
                            size="small"
                        >
                           Buy
                        </Button>                    
                    </CardActionArea>
                </CardContent>
            </Card>

        </Box>
    );
};

export default ShowProduct;