import type { Meta, StoryObj } from '@storybook/react';

import { SuspenseDecorator } from 'shared/config/storybook/SuspenseDecorator/SuspenseDecorator';
import { CurrencySelect } from './CurrencySelect';

const meta: Meta<typeof CurrencySelect> = {
    title: 'entities/CurrencySelect',
    component: CurrencySelect,
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
type Story = StoryObj<typeof CurrencySelect>;

export const Active: Story = {};
export const Disabled: Story = {
    args: {
        readonly: true,
    },
};
