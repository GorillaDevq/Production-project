import type { Meta, StoryObj } from '@storybook/react';

import { SuspenseDecorator } from 'shared/config/storybook/SuspenseDecorator/SuspenseDecorator';
import { CountrySelect } from './CountrySelect';

const meta: Meta<typeof CountrySelect> = {
    title: 'entities/CountrySelect',
    component: CountrySelect,
    parameters: {
        layout: 'fullscreen',
    },
    argTypes: {
    },
    args: {
    },
    decorators: [
        SuspenseDecorator(),
    ],
};

export default meta;
type Story = StoryObj<typeof CountrySelect>;

export const Active: Story = {};
export const Disabled: Story = {
    args: {
        readonly: true,
    },
};
