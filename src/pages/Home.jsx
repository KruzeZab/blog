import {
  Grid,
  Box,
  Container,
  Typography,
  Divider,
  Stack,
} from '@mui/material';
import Categories from '../components/categories/Categories';
import BigPost from '../components/posts/BigPost';
import PostVertical from '../components/posts/PostVertical';
import PostHorizontal from '../components/posts/PostHorizontal';

import Carousel from '../components/carousel/Carousel';
import Tags from '../components/tags/PostTags';

const Home = () => {
  return (
    <Container maxWidth="xl">
      <Grid container spacing={2} mb={4}>
        <Grid item xs={12} lg={8}>
          <BigPost />
        </Grid>
        <Grid item xs={12} lg={4}>
          <Box mb={2}>
            <Typography variant="h5" color="error">
              Trending
            </Typography>
            <Divider />
          </Box>
          <Stack spacing={2}>
            {[...Array(6)].map((e, ind) => {
              return (
                <PostHorizontal
                  key={ind}
                  hideDescAtLarge
                  hideMetaAtLarge
                />
              );
            })}
          </Stack>
        </Grid>
      </Grid>

      <Box mb={4}>
        <Box mb={3}>
          <Typography variant="h5" color="error">
            Latest News
          </Typography>
          <Divider />
        </Box>

        <Grid container columnSpacing={3} rowSpacing={4}>
          {[...Array(8)].map(e => (
            <Grid item sx={12} sm={6} md={4} lg={3}>
              <PostVertical />
            </Grid>
          ))}
        </Grid>
      </Box>

      <Box mb={4}>
        <Box mb={3}>
          <Typography variant="h5" color="error">
            Browse Categories
          </Typography>
          <Divider />
        </Box>
        <Grid container spacing={2}>
          {[...Array(8)].map(e => (
            <Grid item xs={6} sm={4} md={3}>
              <Categories />
            </Grid>
          ))}
        </Grid>
      </Box>

      <Box mb={2}>
        <Box mb={3}>
          <Typography variant="h5" color="error">
            Featured Blogs
          </Typography>
          <Divider />
        </Box>
        <Box>
          <Carousel>
            {[...Array(8)].map(e => (
              <Box mr={2} minHeight="390px">
                <PostVertical />
              </Box>
            ))}
          </Carousel>
        </Box>
      </Box>

      <Box mb={4}>
        <Box mb={3}>
          <Typography variant="h5" color="error">
            Browse Tags
          </Typography>
          <Divider />
        </Box>
        <Grid container spacing={2}>
          {[...Array(8)].map(e => (
            <Grid item xs={6} sm={4} md={3}>
              <Tags />
            </Grid>
          ))}
        </Grid>
      </Box>

      <Box mb={4}>
        <Box mb={3}>
          <Typography variant="h5" color="error">
            Hot Topics
          </Typography>
          <Divider />
        </Box>
        <Grid container spacing={2}>
          {[...Array(9)].map(e => (
            <Grid item sx={12} sm={6} md={4}>
              <PostHorizontal hideDescAtLarge hideMetaAtLarge />
            </Grid>
          ))}
        </Grid>
      </Box>

      <Box mt={4}>
        <Box mb={3}>
          <Typography variant="h5" color="error">
            Recommended
          </Typography>
          <Divider />
        </Box>
        <Grid container spacing={2}>
          <Grid item xs={12} lg={3}>
            <Stack spacing={2}>
              {[...Array(5)].map((e, ind) => {
                return (
                  <PostHorizontal
                    key={ind}
                    hideDescAtLarge
                    hideMetaAtLarge
                  />
                );
              })}
            </Stack>
          </Grid>
          <Grid item xs={12} lg={6}>
            <BigPost />
          </Grid>
          <Grid item xs={12} lg={3}>
            <Stack spacing={2}>
              {[...Array(5)].map((e, ind) => {
                return (
                  <PostHorizontal
                    key={ind}
                    hideDescAtLarge
                    hideMetaAtLarge
                  />
                );
              })}
            </Stack>
          </Grid>
        </Grid>
      </Box>

      <Box mt={4}>
        <Box mb={3}>
          <Typography variant="h5" color="error">
            Read More
          </Typography>
          <Divider />
        </Box>
        <Grid container columnSpacing={3} rowSpacing={4}>
          {[...Array(32)].map(e => (
            <Grid item sx={12} sm={6} md={4} lg={3}>
              <PostVertical />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default Home;
