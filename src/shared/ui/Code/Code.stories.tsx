import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Code } from './Code';

const meta: Meta<typeof Code> = {
    title: 'shared/Code',
    component: Code,
    parameters: {
        layout: 'fullscreen',
    },
    argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Code>;

export const NormalLight: Story = {
    args: {
        text: 'const meta: Meta<typeof Code> = {\n'
            + "    title: 'shared/Code',\n"
            + '    component: Code,\n'
            + '    parameters: {\n'
            + "        layout: 'fullscreen',\n"
            + '    },\n'
            + '    argTypes: {},\n'
            + '};',
    },
};

export const NormalDark: Story = {
    args: {
        text: 'const meta: Meta<typeof Code> = {\n'
            + "    title: 'shared/Code',\n"
            + '    component: Code,\n'
            + '    parameters: {\n'
            + "        layout: 'fullscreen',\n"
            + '    },\n'
            + '    argTypes: {},\n'
            + '};',
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};
