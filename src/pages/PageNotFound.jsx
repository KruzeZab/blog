import {
  Box,
  Button,
  Container,
  Divider,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import { Search as SearchIcon } from '@mui/icons-material';

const PageNotFound = () => {
  return (
    <Stack>
      <Container maxWidth="md" sx={{ minHeight: '75vh' }}>
        <Typography variant="h3" color="error" mb={3} mt={15}>
          Page Not Found
        </Typography>
        <Box mb={3}>
          <form>
            <TextField
              autoFocus
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
        <Divider sx={{ mb: 3 }}>or</Divider>
        <Button variant="contained" color="error" href="/">
          Go to home page
        </Button>
      </Container>
    </Stack>
  );
};

export default PageNotFound;
