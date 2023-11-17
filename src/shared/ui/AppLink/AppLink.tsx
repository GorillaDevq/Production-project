import {FC} from 'react';
import { classNames } from 'shared/lib/classNames';
import cls from './AppLink.module.scss';
import {Link, LinkProps} from "react-router-dom";

export enum AppLinkTheme {
    PRIMARY = 'primary',
    INVERTED = 'inverted',
}

interface AppLinkProps extends LinkProps{
    className?: string,
    theme?: AppLinkTheme,
}

export const AppLink: FC<AppLinkProps> = (AppLinkProps) => {
    const {
        className,
        children,
        to,
        theme = AppLinkTheme.PRIMARY ,
        ...otherProps
    } = AppLinkProps;

    return (
        <Link
            to={to}
            className={classNames(cls.AppLink, {}, [className, cls[theme]])}
            {...otherProps}
        >
            {children}
        </Link>
    )
}