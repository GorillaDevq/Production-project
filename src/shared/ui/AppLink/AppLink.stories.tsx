import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';

export default {
    title: 'shared/AppLink',
    component: AppLink,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {
        to: '/',
    },
} as ComponentMeta<typeof AppLink>;

const Template: ComponentStory<typeof AppLink> = (args) => <AppLink {...args} />;

export const PrimaryLight = Template.bind({});
PrimaryLight.args = {
    children: 'Text',
    theme: AppLinkTheme.PRIMARY,
};

export const PrimaryDark = Template.bind({});
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];
PrimaryDark.args = {
    children: 'Text',
    theme: AppLinkTheme.PRIMARY,
};

export const SecondaryLight = Template.bind({});
SecondaryLight.args = {
    children: 'Text',
    theme: AppLinkTheme.INVERTED,
};

export const SecondaryDark = Template.bind({});
SecondaryDark.decorators = [ThemeDecorator(Theme.DARK)];
SecondaryDark.args = {
    children: 'Text',
    theme: AppLinkTheme.INVERTED,
};
