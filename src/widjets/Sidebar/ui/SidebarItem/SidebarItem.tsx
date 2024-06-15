import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { useSelector } from 'react-redux';
import { getUserAuthData } from 'entities/User';
import { SidebarItemType } from '../../model/types/items';
import cls from './SidebarItem.module.scss';

interface SidebarItemProps {
    item: SidebarItemType;
    collapsed: boolean;
}

export const SidebarItem = memo(({ item, collapsed }: SidebarItemProps) => {
    const { authOnly } = item;
    const { t } = useTranslation();
    const isAuth = useSelector(getUserAuthData);

    if (authOnly && !isAuth) return null;

    return (
        <AppLink
            theme={AppLinkTheme.INVERTED}
            to={item.path}
            className={classNames(cls.SidebarItem, { [cls.collapsed]: collapsed }, [])}
        >
            <item.Icon className={cls.SidebarItem__icon} />
            <span className={cls.SidebarItem__link}>{t(item.text)}</span>
        </AppLink>
    );
});
