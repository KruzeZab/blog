import {
  Box,
  Container,
  Divider,
  Grid,
  Link as MuiLink,
  Paper,
  Typography,
} from '@mui/material';
import { Code as CodeIcon } from '@mui/icons-material';

const Footer = () => {
  return (
    <Paper
      elevation={6}
      sx={{
        py: 3,
        position: 'absolute',
        bottom: 0,
        width: '100%',
      }}
      component="footer"
    >
      <Container maxWidth="xl">
        <Grid spacing={2} container alignItems="center">
          <Grid item xs={12} md={4}>
            <MuiLink
              href="/"
              display="flex"
              alignItems="center"
              justifyContent="center"
              underline="none"
              color="error"
            >
              <CodeIcon fontSize="large" />
              <Typography variant="h6" noWrap fontWeight={700} mr={5}>
                ARJUN'S BLOG
              </Typography>
            </MuiLink>
          </Grid>
          <Grid item xs={12} md={4} textAlign="center">
            <Typography variant="body1">
              Copyright &copy; All rights reserved.
            </Typography>
          </Grid>
          <Grid item xs={12} md={4} textAlign="center">
            Made with
            <span aria-label="heart"> ❤️ </span>by Arjun Singh
          </Grid>
        </Grid>
      </Container>
    </Paper>
  );
};

export default Footer;
