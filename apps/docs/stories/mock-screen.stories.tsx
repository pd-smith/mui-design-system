import React from 'react';
import { Stack, Divider, Typography, TextField } from '@my/design-system';

export default {
    title: 'PlayTest/MockScreens',
};

export const SimpleForm = () => (
    <Stack height="100vh" width="100vw" spacing={2}>
        <Typography variant="h3" component="h1">
            My form
        </Typography>
        <Divider />
        <TextField label="First name" />
        <TextField label="Last name" />
    </Stack>
);
