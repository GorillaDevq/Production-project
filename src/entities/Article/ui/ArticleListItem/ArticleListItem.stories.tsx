import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { ArticleView } from '../../model/types/article';
import { article } from '../../lib/utils';
import { ArticleListItem } from './ArticleListItem';

const meta: Meta<typeof ArticleListItem> = {
    title: 'entities/Article/ArticleListItem',
    component: ArticleListItem,
    parameters: {
        layout: 'fullscreen',
    },
    argTypes: {
    },
    args: {
        article,
    },
};

export default meta;
type Story = StoryObj<typeof ArticleListItem>;

export const SmallLight: Story = {
    args: {
        view: ArticleView.SMALL,
    },
};

export const SmallDark: Story = {
    args: {
        view: ArticleView.SMALL,
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const BigLight: Story = {
    args: {
        view: ArticleView.BIG,
    },
};

export const BigDark: Story = {
    args: {
        view: ArticleView.BIG,
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};
