import { createTheme } from '@mui/material/styles';


const theme = createTheme({
    typography: {
        fontFamily: "Poppins",
        h1: {
            color: "#000"
        }
    },
  palette: {
    // type: 'light',
    primary: {
      main: '#3f51b5',
    },
    secondary: {
      main: '#bdbdbd',
    },
    text: {
    //   disabled: 'rgba(195,195,195,0.38)',
      secondary: "#fff",
      primary: "#fff"      
    //   hint: '#1e88e5',
    },
    background: {
      paper: '#444',
      default: '#222',
    },
    error: {
      main: '#ef5350',
    },
    warning: {
      main: '#ff9800',
    },
    info: {
      main: '#2196f3',
    },
    success: {
      main: '#4caf50',
    },
  },
});

export default theme;
