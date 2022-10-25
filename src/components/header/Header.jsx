import { useContext, useState } from 'react';

import NavLink from '../styled/NavLink.styled';
import {
  AppBar,
  Box,
  Container,
  Drawer,
  IconButton,
  InputAdornment,
  Link as MuiLink,
  List,
  ListItem,
  TextField,
  Toolbar,
  Tooltip,
  Typography,
  useTheme,
} from '@mui/material';
import {
  Code as CodeIcon,
  Menu as MenuIcon,
  Search as SearchIcon,
  LightMode as LightModeIcon,
  DarkMode as DarkModeIcon,
} from '@mui/icons-material';
import { ColorModeContext } from '../../theme/ColorModeContext';

const categoriesList = [
  {
    name: 'Home',
    href: '/',
  },
  {
    name: 'About',
    href: '/',
  },
  {
    name: 'Entertainment',
    href: '/',
  },
  {
    name: 'Social',
    href: '/',
  },
  {
    name: 'Animals',
    href: '/',
  },
  {
    name: 'Technology',
    href: '/',
  },
  {
    name: 'Sports',
    href: '/',
  },
  {
    name: 'Nature',
    href: '/',
  },
  {
    name: 'Geography',
    href: '/',
  },
  {
    name: 'Travel',
    href: '/',
  },
];

const Header = () => {
  const [searchActive, setSearchActive] = useState(false);
  const [menuActive, setMenuActive] = useState(false);
  const [categories, setCategories] = useState(categoriesList);
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);

  const toggleSearch = () => {
    setSearchActive(!searchActive);
  };

  const toggleDrawer = open => {
    setMenuActive(open);
  };

  // const toggleDarkMode = () => {
  //   se
  // };

  const renderBranding = () => {
    return (
      <MuiLink
        href="/"
        display="flex"
        alignItems="center"
        underline="none"
        color="error"
      >
        <CodeIcon fontSize="large" />
        <Typography variant="h6" noWrap fontWeight={700} mr={5}>
          ARJUN'S BLOG
        </Typography>
      </MuiLink>
    );
  };

  const renderLinks = () => (
    <Box flexGrow={1} display={{ xs: 'none', lg: 'flex' }}>
      {categories.map((category, index) => (
        <NavLink key={index} disableRipple href={category.href}>
          {category.name}
        </NavLink>
      ))}
    </Box>
  );

  const renderSearch = () => {
    if (!searchActive) {
      return (
        <Tooltip title="Search">
          <IconButton
            aria-label="search"
            color="inherit"
            onClick={toggleSearch}
          >
            <SearchIcon />
          </IconButton>
        </Tooltip>
      );
    }
    return (
      <TextField
        sx={{ letterSpacing: '1px' }}
        onBlur={toggleSearch}
        size="small"
        autoFocus
        fullWidth
        placeholder="Search Blogs"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
    );
  };

  const renderList = () => {
    return (
      <List>
        {categories.map((category, index) => (
          <ListItem key={index} disablePadding>
            <NavLink
              disableRipple
              href={category.href}
              sx={{ py: 0, pr: 5, pl: 3 }}
            >
              {category.name}
            </NavLink>
          </ListItem>
        ))}
      </List>
    );
  };

  const renderThemeSwitcher = () => {
    const icon =
      theme.palette.mode === 'dark' ? (
        <LightModeIcon />
      ) : (
        <DarkModeIcon />
      );
    console.log(colorMode);
    return (
      <Tooltip title="Change Theme">
        <IconButton
          aria-label="change theme"
          color="inherit"
          onClick={colorMode.toggleColorMode}
        >
          {icon}
        </IconButton>
      </Tooltip>
    );
  };

  return (
    <AppBar
      position="static"
      sx={{
        bgcolor: 'background.paper',
        color: 'text.primary',
        width: '100%',
        mb: 5,
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box
            flexGrow={0}
            display={{
              xs: 'none',
              lg: 'flex',
            }}
            justifyContent="center"
          >
            {renderBranding()}
          </Box>

          <Box flexGrow={0} display={{ xs: 'flex', lg: 'none' }}>
            <IconButton
              onClick={e => toggleDrawer(true)}
              size="large"
              aria-label="navbar toggler"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              // onClick={handleOpenNavMenu}
              color="inherit"
              id="menu-appbar"
            >
              <MenuIcon />
            </IconButton>
            {/* Navbar menu goes here */}
            <Box
              role="presentation"
              onClick={e => toggleDrawer(false)}
              onKeyDown={e => toggleDrawer(false)}
            >
              <Drawer
                anchor="left"
                open={menuActive}
                onClose={e => toggleDrawer(false)}
                aria-describedby="menu-appbar"
              >
                <Box mt={2} ml={2}>
                  {renderBranding()}
                </Box>
                {renderList()}
              </Drawer>
            </Box>
          </Box>

          {!searchActive && (
            <Box
              display={{ xs: 'flex', lg: 'none' }}
              flexGrow={1}
              justifyContent={{ xs: 'center', sm: 'flex-end' }}
            >
              {renderBranding()}
            </Box>
          )}

          {/* Navbar Items */}
          <Box>{!searchActive && renderLinks()}</Box>

          <Box
            flexGrow={{
              xs: 0,
              sm: 1,
            }}
            display={searchActive ? 'block' : 'flex'}
            justifyContent="flex-end"
            textAlign="right"
            my={theme.spacing(2)}
          >
            {/* Search Button */}
            <Box
              onKeyDown={e =>
                e.key === 'Escape' && setSearchActive(false)
              }
            >
              {renderSearch()}
            </Box>

            {/* Dark Theme */}
            {!searchActive && <Box>{renderThemeSwitcher()}</Box>}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
