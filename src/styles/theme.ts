import { createMuiTheme } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';

// A theme with custom primary and secondary color.
// It's optional.

const options: any = {
  palette: {
    primary: {
      main: '#2d2d2d',
      text: '#fff',
    },
    secondary: {
      light: green[300],
      main: green[500],
      dark: green[700],
    },
    typography: {
      useNextVariants: true,
    },
  },
  drawerWidth: 240,
};

const theme = createMuiTheme(options);
export type Theme = typeof theme;
export default theme;
