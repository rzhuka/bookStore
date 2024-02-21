import Box from '@mui/material/Box';
import useActions from 'feature/product/useActions';

const SearchProduct = () => {
    const { search } = useActions();

    return (
        <Box>
            Search product
        </Box>
    );
}
 
export default SearchProduct;