import { FC, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Modal } from 'shared/ui/Modal/Modal';
import { useTranslation } from 'react-i18next';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string,
}

export const Navbar: FC<NavbarProps> = (NavbarProps) => {
    const { className } = NavbarProps;
    const [isAuthModal, setIsAuthModal] = useState(false);
    const { t } = useTranslation();

    const onToggleModal = () => {
        setIsAuthModal((prevState) => !prevState);
    };

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <Button theme={ButtonTheme.CLEAR} onClick={onToggleModal} className={classNames(cls.links)}>
                {t('Enter')}
            </Button>
            <Modal isOpen={isAuthModal} closeHandler={onToggleModal}>
                {t('asdasd')}
            </Modal>
        </div>
    );
};
