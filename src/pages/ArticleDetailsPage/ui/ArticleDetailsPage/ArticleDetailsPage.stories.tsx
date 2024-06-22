import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import ArticleDetailsPage from './ArticleDetailsPage';

const meta: Meta<typeof ArticleDetailsPage> = {
    title: 'pages/ArticleDetailsPage',
    component: ArticleDetailsPage,
    parameters: {
        layout: 'fullscreen',
    },
    argTypes: {},
};

export default meta;
type Story = StoryObj<typeof ArticleDetailsPage>;

export const NormalLight: Story = {
    args: {},
};
