import React from 'react';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import MainIcon from 'shared/assets/icons/main.svg';
import AboutIcon from 'shared/assets/icons/about.svg';
import ProfileIcon from 'shared/assets/icons/profile.svg';

export interface SidebarItemType {
    path: string;
    text: string;
    Icon: React.VFC<React.SVGProps<SVGSVGElement>>;
}

export const SidebarItemsList: SidebarItemType[ ] = [
    {
        path: RoutePath.main,
        text: 'Main link',
        Icon: MainIcon,
    },
    {
        path: RoutePath.about,
        text: 'About link',
        Icon: AboutIcon,
    },
    {
        path: RoutePath.profile,
        text: 'Profile link',
        Icon: ProfileIcon,
    },
];
