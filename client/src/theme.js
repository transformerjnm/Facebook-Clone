import { createMuiTheme, formatMs } from '@material-ui/core/styles';

export const lightTheme = createMuiTheme({
  palette: {
    primary: {
      light: '#ffffff',
      main: '#f0f2f5',
      dark: '#adafb3'
    },
    secondary: {
      light: '#AAC9FF',
      main: '#1878f2',
      dark: '#4267B2'
    },
    info: {
      main: '#3d3d3d'
    },
    error: {
      main: '#f02849'
    },
    warning: {
      main: '#000000'
    },
    success: {
      main: '#31a24c'
    }
  },
  MuiTypography: {
    variantMapping: {
      body1: 'p',
    },
  },
});
//Headers
lightTheme.typography.h1 = {
  fontSize: 'calc(1rem + 5vmin)',
  color: '#05386B'
};
lightTheme.typography.h2 = {
  fontSize: 'calc(1rem + 4vmin)',
  color: '#05386B'
};
lightTheme.typography.h3 = {
  fontSize: 'calc(1rem + 3vmin)',
  color: '#05386B'
};
lightTheme.typography.h4 = {
  fontSize: 'calc(1rem + 2vmin)',
  color: '#05386B'
};
lightTheme.typography.h5 = {
  fontSize: 'calc(1rem + 1vmin)',
  color: '#05386B'
};
lightTheme.typography.h6 = {
  fontSize: 'calc(1rem + .5vmin)',
  color: '#05386B'
};

//more typography 
lightTheme.typography.subtitle1 = {
  fontSize: 'calc(1rem + 1vmin)',
  margin: '1rem .5rem',
  fontWeight: 'normal',
  color: '#313639'
}
lightTheme.typography.body1 = {
  fontSize: 'calc(.8rem + 1vmin)',
  color: '#313639'
}

