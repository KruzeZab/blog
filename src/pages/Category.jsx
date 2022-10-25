import {
  Box,
  Container,
  Divider,
  Grid,
  Typography,
} from '@mui/material';
import Footer from '../components/footer/Footer';
import PostVertical from '../components/posts/PostVertical';

const Category = () => {
  return (
    <>
      <Container maxWidth="xl">
        <Box mb={3}>
          <Typography variant="h5">Browse Geography</Typography>
          <Divider />
        </Box>
        <Grid container rowSpacing={3} columnSpacing={2}>
          {[...Array(16)].map((_, ind) => (
            <Grid key={ind} item xs={12} md={6} lg={4} xl={3}>
              <PostVertical />
            </Grid>
          ))}
        </Grid>
      </Container>
      <Footer />
    </>
  );
};

export default Category;
