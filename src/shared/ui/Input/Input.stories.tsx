import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Input } from './Input';

const meta: Meta<typeof Input> = {
    title: 'shared/Input',
    component: Input,
    parameters: {
        layout: 'fullscreen',
    },
    argTypes: {
    },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Light: Story = {
    args: {
        value: '123124',
    },
};

export const Dark: Story = {
    args: {
        value: '123124',
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};
