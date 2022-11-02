import React from 'react';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import { theme } from '../../theme';

export function ThemeProvider({ children }: { children: React.ReactNode | React.ReactNode[] }) {
    return <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>;
}
