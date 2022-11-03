import React from 'react';
import MuiButton, { type ButtonProps as MuiButtonProps } from '@mui/material/Button';

// eslint-disable-next-line @typescript-eslint/ban-types
type CustomProps = {};

export type ButtonProps<C extends React.ElementType> = MuiButtonProps<C, { component?: C } & CustomProps>;

export function Button<C extends React.ElementType>(props: ButtonProps<C>) {
    return <MuiButton {...props} />;
}
