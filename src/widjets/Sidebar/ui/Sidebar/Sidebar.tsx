import { memo, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { LangSwitcher } from 'widjets/LangSwitcher';
import { ThemeSwitcher } from 'widjets/ThemeSwitcher';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { useSelector } from 'react-redux';
import { SidebarItem } from '../SidebarItem/SidebarItem';
import cls from './Sidebar.module.scss';
import { getSidebarItems } from '../../model/selectors/getSidebarItems';

interface SidebarProps {
    className?: string,
}

export const Sidebar = memo((props: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);
    const sidebarItemsList = useSelector(getSidebarItems);

    const { className } = props;

    const onToggle = () => (setCollapsed((prevState) => !prevState));

    return (
        <div
            data-testid="sidebar"
            className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}
        >
            <div className={cls.items}>
                {sidebarItemsList.map((link) => (
                    <SidebarItem
                        item={link}
                        collapsed={collapsed}
                        key={link.path}
                    />
                ))}
            </div>
            <Button
                onClick={onToggle}
                data-testid="toggle"
                className={classNames(cls.collapseBtn)}
                theme={ButtonTheme.BACKGROUND_INVERTED}
                square
                size={ButtonSize.L}
            >
                {collapsed ? '>' : '<'}
            </Button>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher className={cls.lang} short={collapsed} />
            </div>
        </div>
    );
});
