import { ReactNode } from 'react';
import {
  Box,
  Divider,
  Drawer,
  List,
  ListItemButton,
  ListItem,
  ListItemIcon,
  ListItemText,
  useTheme,
} from '@mui/material';
import { Inter } from 'next/font/google';

interface MenuItemProps {
  text: string;
  icon?: ReactNode;
  link?: string;
}

const font = Inter({
  weight: '400',
  subsets: ['latin-ext'],
  display: 'swap',
});

type Width = (string & object) | number;

function MenuItemContent({
  text,
  icon,
}: {
  text: string;
  icon?: ReactNode;
}): JSX.Element {
  if (icon) {
    return (
      <>
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText primary={text} />
      </>
    );
  }
  return <ListItemText primary={text} />;
}

function MenuItem({
  text,
  icon,
  link,
  width,
}: {
  text: string;
  width: Width;
  icon?: ReactNode;
  link?: string;
}): JSX.Element {
  const theme = useTheme();
  const sx = {
    width,
    backgroundColor: theme.palette.primary.main,
  };
  if (!link) {
    return (
      <ListItem key={text} sx={sx}>
        <MenuItemContent icon={icon} text={text} />
      </ListItem>
    );
  }

  return (
    <ListItemButton key={text} sx={sx} href={link}>
      <MenuItemContent icon={icon} text={text} />
    </ListItemButton>
  );
}

export default function MenuDrawer({
  items,
  width,
  open,
  onClose,
}: {
  items: MenuItemProps[];
  width: Width;
  open: boolean;
  onClose: () => void;
}): JSX.Element {
  const theme = useTheme();

  return (
    <Box
      component="nav"
      textAlign="center"
      sx={{ width: { sm: width }, flexShrink: { sm: 0 } }}
      aria-label="folders"
      display="contents"
    >
      <Drawer
        variant="temporary"
        anchor="left"
        open={open}
        onClose={onClose}
        sx={{
          '& .MuiDrawer-paper': {
            backgroundColor: theme.palette.primary.main,
            boxSizing: 'border-box',
            width,
          },
        }}
        ModalProps={{ keepMounted: true }}
      >
        <Box
          sx={{
            width: width,
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.primary.contrastText,
          }}
          className={font.className}
        >
          <Box sx={theme.mixins.toolbar} />
          <Divider />
          <List>
            {items.map(({ text, icon, link }: MenuItemProps) => (
              <MenuItem
                key={text}
                width={width}
                text={text}
                icon={icon}
                link={link}
              />
            ))}
          </List>
        </Box>
      </Drawer>
    </Box>
  );
}
