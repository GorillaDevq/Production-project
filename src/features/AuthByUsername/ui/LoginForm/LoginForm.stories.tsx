import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { SuspenseDecorator } from 'shared/config/storybook/SuspenseDecorator/SuspenseDecorator';
import LoginForm from './LoginForm';

const meta: Meta<typeof LoginForm> = {
    title: 'features/LoginForm',
    component: LoginForm,
    parameters: {
        layout: 'fullscreen',
    },
    argTypes: {
    },
    decorators: [],
};

export default meta;
type Story = StoryObj<typeof LoginForm>;

export const Light: Story = {
    args: {
    },
    decorators: [StoreDecorator({
        loginForm: {
            username: 'admin',
            password: '123',
        },
    })],
};

export const Error: Story = {
    args: {
    },
    decorators: [StoreDecorator({
        loginForm: {
            username: 'admin',
            password: '123',
            error: 'Rejected',
        },
    })],
};

export const Dark: Story = {
    args: {
    },
    decorators: [ThemeDecorator(Theme.DARK), StoreDecorator({
        loginForm: {
            username: 'admin',
            password: '123',
        },
    })],
};

export const Loading: Story = {
    args: {
    },
    decorators: [StoreDecorator({
        loginForm: {
            username: 'admin',
            password: '123',
            isLoading: true,
        },
    })],
};
