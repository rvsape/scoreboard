import { createTheme, responsiveFontSizes } from '@material-ui/core/styles';

// default theme
// https://mui.com/customization/default-theme/#heading-explore

let theme = createTheme({
    palette: {
        primary: {
            main: '#00acc1',
        },
        secondary: {
            main: '#f48fb1',
        },
        text: {
            // primary: '#fff'
        },
    },
    typography: {
        fontFamily: ["Roboto"].join(','),
        button: {
            letterSpacing: '0.09rem',
        },
    },
});

export default responsiveFontSizes(theme);