import {FC} from 'react';
import { classNames } from 'shared/lib/classNames';
import cls from './Navbar.module.scss';
import {Link} from "react-router-dom";

interface NavbarProps {
    className?: string,
}

export const Navbar: FC<NavbarProps> = (NavbarProps) => {
    const {className} = NavbarProps;

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <Link to={'/'}>Main</Link>
            <Link to={'/About'}>About</Link>
        </div>
    )
}