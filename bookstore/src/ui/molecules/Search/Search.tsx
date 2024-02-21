import { MouseEvent } from "react";
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import Box from '@mui/material/Box';

type Props = {
  readonly onChange: (value: string) => void;
  readonly value: string
};


const Search = (
  {
    value,
    onChange
  }: Props
) => {

  const handleChange = (value: string) => {
    onChange(value);
  };


  return (
    <Box display="flex" alignItems="center" p={1}
      sx={{
        border: '1px solid black',
        borderRadius: '10px',
        width: '100%'
      }}>
      <SearchIcon
        sx={{
          width: 40
        }}
      />
      <InputBase
        placeholder='Search...'
        inputProps={{ 'aria-label': 'search' }}
        onChange={e => handleChange(e.target.value)}
        value={value}
        fullWidth
      />
    </Box>
  );
}

export default Search;