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
import PropTypes from 'prop-types';

const PostHorizontal = ({ hideMetaAtLarge, hideDescAtLarge }) => {
  return (
    <Card sx={{ display: 'flex' }}>
      <CardActionArea
        disableRipple
        href="/"
        sx={{
          display: 'flex',
          alignItems: 'stretch',
          justifyContent: 'flex-start',
        }}
      >
        <CardMedia
          component="img"
          sx={{ width: '150px' }}
          image="https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20-%202021-05-10T171626_423.jpg"
          alt="Live from space album cover"
        />
        <Box>
          <CardContent>
            {!hideMetaAtLarge && (
              <Box mb={1} display={{ xs: 'none', md: 'block' }}>
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
            )}
            <Typography variant="h5" fontSize={16} component="div">
              Who is the prime ministerial candidate from the ruling
              alliance?
            </Typography>
            {!hideDescAtLarge && (
              <Typography
                display={{ xs: 'none', md: 'block' }}
                variant="body2"
                color="text.secondary"
                mt={1}
              >
                Lorem ipsum, dolor sit amet consectetur adipisicing
                elit. Perspiciatis vitae unde architecto esse nemo
                amet sit dicta asperiores quod optio accusamus
                corporis, ex odit cum deserunt dolorum ipsam enim.
                Saepe! Incidunt totam ullam architecto, dolores illo,
                quae eaque voluptates pariatur, sint consequuntur
                repellendus nostrum at. Temporibus, quod debitis.
                Numquam rem repellendus error rerum expedita minima
                quisquam sint veniam quaerat distinctio.
              </Typography>
            )}
          </CardContent>
        </Box>
      </CardActionArea>
    </Card>
  );
};

// Posts meta data is only shown in large screen
// Change this behavior throught these props.
PostHorizontal.propTypes = {
  hideMetaAtLarge: PropTypes.bool,
  hideDescAtLarge: PropTypes.bool,
};

PostHorizontal.defaultProps = {
  hideMetaAtLarge: false,
  hideDescAtLarge: false,
};

export default PostHorizontal;
