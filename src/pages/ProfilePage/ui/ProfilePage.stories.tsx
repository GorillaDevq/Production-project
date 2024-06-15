import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import avatarSrc from 'shared/assets/test/storybook.jpg';
import ProfilePage from './ProfilePage';

const meta: Meta<typeof ProfilePage> = {
    title: 'pages/ProfilePage',
    component: ProfilePage,
    parameters: {
        layout: 'fullscreen',
    },
    argTypes: {
    },
    decorators: [
        StoreDecorator({
            profile: {
                isLoading: false,
                readonly: true,
                form: {
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
        }),
    ],
};

export default meta;
type Story = StoryObj<typeof ProfilePage>;

export const Light: Story = {
    decorators: [
    ],
};

export const Dark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)],
};
