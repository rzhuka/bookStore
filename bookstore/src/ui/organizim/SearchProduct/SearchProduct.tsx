import { useEffect, useRef, useState, useDeferredValue } from 'react';
import { useDebounceCallback } from 'usehooks-ts';
import Box from '@mui/material/Box';
import useActions from 'feature/product/useActions';
import Typography from "@mui/material/Typography";
import Search from 'ui/molecules/Search';
import Card from 'ui/molecules/Card';

const SearchProduct = () => {
    const actions = useActions();
    const actionsRef = useRef(actions);
    actionsRef.current = actions;

    const { getBooks, findByTitle } = actions;

    const [querySearch, setQuerySearch] = useState('');

    const title = useDeferredValue(querySearch);

    const onChange = (query: string) =>
        setQuerySearch(query);


    console.log('books => ', getBooks());

    useEffect(() => {
        const controller = new AbortController();

        actionsRef.current.fetch({
            signal: controller.signal
        });

        return () => controller.abort();
    }, []);

    return (
        <Box
            sx={{
                width: '100%'
            }}
        >
            <Typography
                variant='h5'
            >
                Search to find your new book
            </Typography>
            <Search
                value={querySearch}
                onChange={onChange}
            />
            <Box
                sx={{
                    width: '100%',
                    display: 'flex'
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'center',
                        gap: 2,
                        width: '100%'
                    }}
                >
                    {findByTitle(title)
                        .map(({ isbn, ...restProps }) => (
                            <Card
                                {...restProps}
                                isbn={isbn}
                                key={isbn}
                            />
                        ))}
                </Box>
            </Box>
        </Box>
    );
};

export default SearchProduct;