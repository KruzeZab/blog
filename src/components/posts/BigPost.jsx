import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Stack,
  Chip,
  Typography,
} from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const BigPost = () => {
  return (
    <Card>
      <CardActionArea disableRipple href="/asd">
        <CardMedia
          height="100%"
          sx={{
            maxHeight: {
              xs: '500px',
              md: '400px',
              lg: '500px',
            },
          }}
          alt="Contemplative Reptile"
          component="img"
          image="https://ichef.bbci.co.uk/news/976/cpsprodpb/F382/production/_123883326_852a3a31-69d7-4849-81c7-8087bf630251.jpg"
        />
        <CardContent>
          <Box mb={1}>
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
            >
              <Chip label="Anime" color="error" />
              <Typography variant="subtitle1" color="text.secondary">
                - Feb 21, 2022
              </Typography>
            </Stack>
          </Box>
          <Typography
            gutterBottom
            color="inherit"
            variant="h5"
            fontSize={18}
          >
            China's top leader begins a norm-breaking third term with
            an even greater concentration of power, after retiring key
            party leaders and elevating
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default BigPost;
