import { useState, useDeferredValue } from 'react';
import Box from '@mui/material/Box';
import Typography from "@mui/material/Typography";
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Search from 'ui/molecules/Search';
import Card from 'ui/molecules/Card';
import { withBreadcrumbs } from 'ui/layouts/Breadcrumbs';
import { Routes } from 'config/routes';
import { SearchFilter, useContext } from 'feature/product';


const SearchProduct = () => {
    const { findByFilter } = useContext();
    const [searchFilters, setSearchFilters] = useState<Array<keyof SearchFilter>>([]);
    const [querySearch, setQuerySearch] = useState('');

    const query = useDeferredValue(querySearch);

    const onChange = (query: string) =>
        setQuerySearch(query);

    const getSearchFilters = () =>
        searchFilters.reduce((searchFilters, searchFitlerCriteria) => ({
            ...searchFilters,
            [searchFitlerCriteria]: query
        }), {} as SearchFilter);


    return (
        <Box
            sx={{
                width: '100%'
            }}
        >
            <Typography
                variant='h5'
                sx={{
                    mb: 1.5,
                    textAlign: 'center',
                    fontWeight: 600
                }}
            >
                Search to find your new book
            </Typography>
            <Search
                value={querySearch}
                onChange={onChange}
            />
            <Box>
                <FormGroup
                    sx={{
                        display: 'flex',
                        width: '90%',
                        flexDirection: 'row',
                        mb: 1.5,
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                >
                    <Typography
                        variant='h6'
                        sx={{
width: '15%',

                            fontWeight: 500
                        }}
                    >Filters :</Typography>
                    {Array.from<keyof SearchFilter>(['title', 'author', 'publisher', 'isbn']).map(filter => (
                        <FormControlLabel
                            control={(
                                <Checkbox
                                    checked={searchFilters.includes(filter)}
                                    name={filter}
                                    onChange={({ target }, checked) => setSearchFilters(state => {
                                        if (checked) {
                                            return Array.from<keyof SearchFilter>([
                                                ...state,
                                                target.name as keyof SearchFilter
                                            ]);
                                        }

                                        return state.filter(filter => filter !== target.name);
                                    })}
                                />
                            )}
                            label={filter.toLocaleUpperCase()}
                        />
                    ))}
                </FormGroup>
            </Box>
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
                        width: '100%',
                        mt: 1.5
                    }}
                >
                    {findByFilter(
                        getSearchFilters()
                    )
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

export default withBreadcrumbs(SearchProduct, _ => ({
    parentLinks: [
        {
            to: Routes.Root,
            label: 'Home'
        }
    ],
    currentView: {
        label: 'Search'
    }
}));
