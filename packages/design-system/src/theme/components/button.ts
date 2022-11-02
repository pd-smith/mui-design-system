import { ComponentsProps, ComponentsOverrides, ComponentsVariants } from '@mui/material';

export const MuiButton: {
    defaultProps?: ComponentsProps['MuiButton'];
    styleOverrides?: ComponentsOverrides['MuiButton'];
    variants?: ComponentsVariants['MuiButton'];
} = {
    defaultProps: {
        variant: 'contained',
    },
    styleOverrides: {
        root: {
            borderRadius: '5rem',
        },
    },
};
