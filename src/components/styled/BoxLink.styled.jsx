import { darken, Link, styled } from '@mui/material';
import {
  blue,
  cyan,
  green,
  orange,
  pink,
  purple,
  red,
  teal,
  yellow,
  brown,
} from '@mui/material/colors';

// generate array of random color
const colors = [
  blue[500],
  green[500],
  red[500],
  orange[500],
  purple[500],
  pink[500],
  yellow[800],
  cyan[500],
  teal[800],
  brown[800],
];

const getColor = () =>
  colors[Math.floor(Math.random() * colors.length)];

const BoxLink = styled(Link)(({ theme }) => ({
  color:
    theme.palette.mode === 'light'
      ? theme.palette.getContrastText(
          colors[Math.floor(Math.random() * colors.length)]
        )
      : '#fff',
  backgroundColor:
    theme.palette.mode === 'light'
      ? getColor()
      : darken(getColor(), 0.3),
  width: '100%',
  borderRadius: '5px',
  height: '60px',
  [theme.breakpoints.up('md')]: {
    height: '100px',
  },
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  textDecoration: 'none',
  transition: 'all 0.3s ease',

  '&:hover': {
    opacity: 0.8,
  },
}));

export default BoxLink;
