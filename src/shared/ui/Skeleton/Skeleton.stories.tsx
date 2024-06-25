import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Skeleton } from './Skeleton';

const meta: Meta<typeof Skeleton> = {
    title: 'shared/Skeleton',
    component: Skeleton,
    parameters: {
        layout: 'fullscreen',
    },
    argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Skeleton>;

export const NormalLight: Story = {
    args: {
        width: '100%',
        height: 200,
    },
};

export const NormalDark: Story = {
    args: {
        width: '100%',
        height: 200,
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const CircleLight: Story = {
    args: {
        border: '50%',
        width: 100,
        height: 100,
    },
};

export const CircleDark: Story = {
    args: {
        border: '50%',
        width: 100,
        height: 100,
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};
