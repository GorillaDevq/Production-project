import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string,
}

export const Navbar: FC<NavbarProps> = (NavbarProps) => {
    const { t } = useTranslation();
    const { className } = NavbarProps;

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <div className={classNames(cls.links)}>
                <AppLink
                    theme={AppLinkTheme.INVERTED}
                    to="/"
                    className={classNames(cls.mainLink)}
                >
                    {t('Main link')}
                </AppLink>
                <AppLink theme={AppLinkTheme.INVERTED} to="/About">{t('About link')}</AppLink>
            </div>
        </div>
    );
};
