import type { Meta, StoryObj } from '@storybook/react';
import { SuspenseDecorator } from 'shared/config/storybook/SuspenseDecorator/SuspenseDecorator';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import avatarSrc from 'shared/assets/test/storybook.jpg';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { ProfileCard } from './ProfileCard';

const meta: Meta<typeof ProfileCard> = {
    title: 'entities/ProfileCard',
    component: ProfileCard,
    parameters: {
        layout: 'fullscreen',
    },
    args: {
        data: {
            username: 'admin',
            age: 22,
            country: Country.RUSSIA,
            currency: Currency.RUB,
            firstName: 'Ivan',
            lastName: 'Mikhalev',
            avatar: avatarSrc,
            city: 'Moscow',
        },
    },
    argTypes: {
    },
    decorators: [SuspenseDecorator()],
};

export default meta;
type Story = StoryObj<typeof ProfileCard>;

export const Primary: Story = {
};

export const Dark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const WithError: Story = {
    args: {
        error: 'true',
    },
};

export const Loading: Story = {
    args: {
        isLoading: true,
    },
};
