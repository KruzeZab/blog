import { IconButton, styled } from '@mui/material';

const CarouselButton = styled(IconButton)(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'light'
      ? theme.palette.grey[200]
      : theme.palette.grey[800],
  color:
    theme.palette.mode === 'light'
      ? theme.palette.grey[600]
      : theme.palette.grey[400],

  '&:hover': {
    backgroundColor:
      theme.palette.mode === 'light'
        ? theme.palette.grey[200]
        : theme.palette.grey[800],
    color:
      theme.palette.mode === 'light'
        ? theme.palette.grey[600]
        : theme.palette.grey[400],
  },
}));

export default CarouselButton;
