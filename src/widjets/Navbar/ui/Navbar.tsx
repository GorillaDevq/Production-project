import {FC} from 'react';
import {classNames} from 'shared/lib/classNames';
import cls from './Navbar.module.scss';
import {AppLink, AppLinkTheme} from "shared/ui/AppLink/AppLink";

interface NavbarProps {
    className?: string,
}

export const Navbar: FC<NavbarProps> = (NavbarProps) => {
    const {className} = NavbarProps;

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <div className={classNames(cls.links)}>
                <AppLink theme={AppLinkTheme.INVERTED} to={'/'} className={classNames(cls.mainLink)}>Главная</AppLink>
                <AppLink theme={AppLinkTheme.INVERTED} to={'/About'}>О сайте</AppLink>
            </div>
        </div>
    )
}