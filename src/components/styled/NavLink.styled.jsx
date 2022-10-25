import { Button, styled } from '@mui/material';

const NavLink = styled(Button)(({ theme }) => ({
  color: theme.palette.text.primary,
  display: 'block',
  textTransform: 'capitalize',
  marginRight: theme.spacing(2),
  marginTop: theme.spacing(2),
  marginBottom: theme.spacing(2),
  letterSpacing: '0.5px',
  '&:hover': {
    color: theme.palette.error.main,
    backgroundColor: 'transparent',
  },
  '&:active': {
    background: 'none',
  },
}));

export default NavLink;
