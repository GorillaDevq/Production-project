import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Text, TextTheme } from './Text';

const meta: Meta<typeof Text> = {
    title: 'shared/Text',
    component: Text,
    parameters: {
        layout: 'fullscreen',
    },
    argTypes: {
    },
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Light: Story = {
    args: {
        title: 'Text',
        text: 'Textqweqw',
    },
};

export const Dark: Story = {
    args: {
        title: 'Text',
        text: 'Textqweqw',
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const Error: Story = {
    args: {
        title: 'Text',
        text: 'Textqweqw',
        theme: TextTheme.ERROR,
    },
};

export const onlyTitle: Story = {
    args: {
        title: 'Text',
    },
};

export const onlyText: Story = {
    args: {
        text: 'Textqweqw',
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};
