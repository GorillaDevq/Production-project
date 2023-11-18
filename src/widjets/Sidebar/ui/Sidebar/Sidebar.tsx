import {FC, useState} from 'react';
import { classNames } from 'shared/lib/classNames';
import cls from './Sidebar.module.scss';
import {ThemeSwitcher} from "widjets/ThemeSwitcher";

interface SidebarProps {
    className?: string,
}

export const Sidebar: FC<SidebarProps> = (SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);

    const { className } = SidebarProps;

    const onToggle = () => (setCollapsed(prevState => !prevState))

    return (
        <div
            className={classNames(cls.Sidebar, {[cls.collapsed]: collapsed}, [className])}
        >
            <button onClick={onToggle}>
                TOGGLE
            </button>
            <div className={cls.switchers}>
                <ThemeSwitcher />
            </div>
        </div>
    )
}