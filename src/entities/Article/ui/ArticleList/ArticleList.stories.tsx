import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { ArticleView } from '../../model/types/article';
import { ArticleList } from './ArticleList';
import { article } from '../../lib/utils';

const meta: Meta<typeof ArticleList> = {
    title: 'entities/Article/ArticleList',
    component: ArticleList,
    parameters: {
        layout: 'fullscreen',
    },
    argTypes: {},
    args: {
        articles: [article, article, article, article],
    },
};

export default meta;
type Story = StoryObj<typeof ArticleList>;

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

export const isLoadingSmallLight: Story = {
    args: {
        view: ArticleView.SMALL,
        isLoading: true,
    },
};

export const isLoadingSmallDark: Story = {
    args: {
        view: ArticleView.SMALL,
        isLoading: true,
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

export const isLoadingBigLight: Story = {
    args: {
        view: ArticleView.BIG,
        isLoading: true,
    },
};

export const isLoadingBigDark: Story = {
    args: {
        view: ArticleView.BIG,
        isLoading: true,
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};
