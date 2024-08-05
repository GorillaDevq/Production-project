import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { CommentCard } from './CommentCard';

const meta: Meta<typeof CommentCard> = {
    title: 'entities/Comment/CommentCard',
    component: CommentCard,
    parameters: {
        layout: 'fullscreen',
    },
    argTypes: {},
    args: {
        comment: {
            id: '1',
            text: 'some comment',
            user: {
                id: '1', username: 'Ivan', avatar: 'https://sun9-65.userapi.com/impg/otNK__sKAUa0SSNAkiGN9OBdEb2SK-DatZPlLw/nwkztt7dVtk.jpg?size=460x460&quality=96&sign=825e093f90336b1626b5a6dc22133658&type=album',
            },
        },
    },
};

export default meta;
type Story = StoryObj<typeof CommentCard>;

export const Light: Story = {
    args: {},
};

export const Dark: Story = {
    args: {},
    decorators: [
        ThemeDecorator(Theme.DARK),
    ],
};

export const isLoadingLight: Story = {
    args: {
        isLoading: true,
    },
};

export const isLoadingDark: Story = {
    args: {
        isLoading: true,
    },
    decorators: [
        ThemeDecorator(Theme.DARK),
    ],
};
