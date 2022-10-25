import {
  Box,
  Container,
  InputAdornment,
  TextField,
} from '@mui/material';
import { Search as SearchIcon } from '@mui/icons-material';
import PostHorizontal from '../components/posts/PostHorizontal';

const Search = () => {
  return (
    <Box>
      <Container maxWidth="xl">
        <Box mb={4}>
          <form>
            <TextField
              variant="outlined"
              fullWidth
              placeholder="Search blogs"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />
          </form>
        </Box>

        <Box>
          <Box mb={3}>
            <PostHorizontal />
          </Box>
          <Box mb={3}>
            <PostHorizontal />
          </Box>
          <Box mb={3}>
            <PostHorizontal />
          </Box>
          <Box mb={3}>
            <PostHorizontal />
          </Box>
          <Box mb={3}>
            <PostHorizontal />
          </Box>
          <Box>
            <PostHorizontal />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Search;
