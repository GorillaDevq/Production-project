import type { Meta, StoryObj } from '@storybook/react';
import avatarSrc from 'shared/assets/test/storybook.jpg';
import { Avatar } from './Avatar';

const meta: Meta<typeof Avatar> = {
    title: 'shared/Avatar',
    component: Avatar,
    parameters: {
        layout: 'fullscreen',
    },
    argTypes: {
    },
    args: {
        src: avatarSrc,
        alt: 'avatar',
    },
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Default: Story = {
};

export const Medium: Story = {
    args: {
        size: 200,
    },
};
