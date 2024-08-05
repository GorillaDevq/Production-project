import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { action } from '@storybook/addon-actions';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import AddCommentForm from './AddCommentForm';

const meta: Meta<typeof AddCommentForm> = {
    title: 'features/AddCommentForm',
    component: AddCommentForm,
    parameters: {
        layout: 'fullscreen',
    },
    argTypes: {},
    decorators: [
        StoreDecorator({
        }),
    ],
};

export default meta;
type Story = StoryObj<typeof AddCommentForm>;

export const Light: Story = {
    args: {
        onSendComment: action('Hi comment'),
    },
};

export const Dark: Story = {
    args: {
        onSendComment: action('Hi comment'),
    },
    decorators: [
        ThemeDecorator(Theme.DARK),
    ],
};
