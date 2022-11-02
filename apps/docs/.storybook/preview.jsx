import { addDecorator } from '@storybook/react';
import { ThemeProvider } from '@my/design-system';

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {},
    options: {},
};

addDecorator((story) => <ThemeProvider>{story()}</ThemeProvider>);
