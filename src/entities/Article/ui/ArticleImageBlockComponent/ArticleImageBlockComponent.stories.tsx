import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { ArticleImageBlockComponent } from './ArticleImageBlockComponent';

const meta: Meta<typeof ArticleImageBlockComponent> = {
    title: 'entities/ArticleImageBlockComponent',
    component: ArticleImageBlockComponent,
    parameters: {
        layout: 'fullscreen',
    },
    argTypes: {},
};

export default meta;
type Story = StoryObj<typeof ArticleImageBlockComponent>;

export const NormalLight: Story = {
    args: {},
};
