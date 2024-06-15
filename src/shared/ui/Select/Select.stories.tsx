import type { Meta, StoryObj } from '@storybook/react';

import { Select } from './Select';

const meta: Meta<typeof Select> = {
    title: 'shared/Select',
    component: Select,
    parameters: {
        layout: 'fullscreen',
    },
    argTypes: {
    },
    args: {
    },
};

export default meta;
type Story = StoryObj<typeof Select>;

export const Default: Story = {
    args: {
        label: 'Text',
        options: [
            {
                value: '123', content: 'Первый пункт',
            },
            {
                value: '1234', content: 'Второй пункт',
            },
            {
                value: '5', content: 'Третий пункт',
            },
        ],
    },
};
