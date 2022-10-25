import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Chip,
  Stack,
  Typography,
} from '@mui/material';

const Post = () => {
  return (
    <Card>
      <CardActionArea disableRipple href="/asd">
        <CardMedia
          component="img"
          height={{ xs: 100, md: 50 }}
          image="https://ichef.bbci.co.uk/news/976/cpsprodpb/17FB4/production/_123882289_d4890d87-0015-46cf-b40c-851f680e325b.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Box mb={1}>
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
            >
              <Chip label="Anime" color="error" size="small" />
              <Typography
                variant="subtitle1"
                color="text.secondary"
                fontSize={13}
              >
                - Feb 21, 2022
              </Typography>
            </Stack>
          </Box>
          <Typography
            component="div"
            gutterBottom
            variant="h5"
            color="inherit"
            fontSize={16}
          >
            Boris Johnson and Rishi Sunak in 'secret summit' as race
            to replace UK Prime Minister Liz Truss heats up
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with
            over 6,000 species...
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default Post;
