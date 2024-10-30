import { createTheme } from '@mui/material/styles';

export const colorTokens = {
    primary: '#D7D9FF',
    secondary: '#B0B3E6',
    accent: '#6A6F9A',
    background: '#F5F5F5',
    text: '#333333',
    error: '#FF6F61',
    success: '#4CAF50',
    pending: '#FFC107',
};

const theme = createTheme({
    palette: {
        primary: {
            main: colorTokens.primary,
        },
        secondary: {
            main: colorTokens.secondary,
            accent: colorTokens.accent
        },
        error: {
            main: colorTokens.error,
        },
        success: {
            main: colorTokens.success,
        },
        background: {
            default: colorTokens.background,
        },
        text: {
            main: colorTokens.text,
        },
    },
});

export default theme;
