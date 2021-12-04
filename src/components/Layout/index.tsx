import React, { PropsWithChildren } from 'react';
import {
  AppBar, Box, CssBaseline, Divider, Drawer, IconButton, List, ListItem, ListItemIcon, ListItemText, Toolbar, Typography,
} from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import MenuIcon from '@mui/icons-material/Menu';
import {
  useTheme,
} from '@mui/material/styles';

const drawerWidth = 240;

interface LayoutProps {
  container?: Element
}

const Layout = (props: PropsWithChildren<LayoutProps>) => {
  const { container } = props;
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  function handleDrawerToggle() {
    setMobileOpen(!mobileOpen);
  }

  const drawer = (
    <Box sx={{ width: drawerWidth, backgroundColor: theme.palette.primary.main, color: theme.palette.primary.contrastText }}>
      <Box sx={theme.mixins.toolbar} />
      <Divider />
      <List>
        {['Info'].map((text) => (
          <ListItem button key={text} sx={{
            width: drawerWidth,
            backgroundColor: theme.palette.primary.main,
            '&:hover': {
              backgroundColor: theme.palette.primary.light,
            },
          }}>
            <ListItemIcon>
              <DashboardIcon sx={{ color: theme.palette.primary.contrastText }} />
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const appBar = (
    <AppBar position="fixed" sx={{ width: '100%' }}>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" noWrap></Typography>
      </Toolbar>
    </AppBar>
  );

  const drawerBox = (
    <Box
      component='nav'
      textAlign='center'
      sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
      aria-label="folders"
      display='contents'
    >
      <Drawer
        container={container}
        variant="temporary"
        anchor='left'
        open={mobileOpen}
        onClose={handleDrawerToggle}
        sx={{
          '& .MuiDrawer-paper': { backgroundColor: theme.palette.primary.main, boxSizing: 'border-box', width: drawerWidth },
        }}
        ModalProps={{ keepMounted: true }}
      >
        {drawer}
      </Drawer>
    </Box>
  );

  return (
    <Box sx={{ color: theme.palette.primary.contrastText, display: 'flex', maxHeight: '100vh' }}>
      <CssBaseline />
      {appBar}
      {drawerBox}
      {props.children}
    </Box>
  );
};

export default Layout;