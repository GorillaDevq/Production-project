import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { Sidebar } from './Sidebar';

const meta: Meta<typeof Sidebar> = {
    title: 'widjets/Sidebar',
    component: Sidebar,
    parameters: {
        layout: 'fullscreen',
    },
    argTypes: {
    },
};

export default meta;
type Story = StoryObj<typeof Sidebar>;

export const Light: Story = {
    decorators: [
        StoreDecorator({
            user: {
                authData: {},
            },
        }),
    ],
};

export const Dark: Story = {
    decorators: [
        ThemeDecorator(Theme.DARK),
        StoreDecorator({
            user: {
                authData: {},
            },
        }),
    ],
};

export const NoAuthLight: Story = {};

export const NoAuthDark: Story = {
    decorators: [
        ThemeDecorator(Theme.DARK),
    ],
};
