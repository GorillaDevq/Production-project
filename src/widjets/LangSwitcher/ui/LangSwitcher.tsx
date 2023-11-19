import {FC} from 'react';
import {classNames} from 'shared/lib/classNames';
import cls from './LangSwitcher.module.scss';
import {Button, ThemeButton} from "shared/ui/Button/Button";
import {useTranslation} from "react-i18next";

interface LangSwitcherProps {
    className?: string,
}

export const LangSwitcher: FC<LangSwitcherProps> = (LangSwitcherProps) => {
    const { className } = LangSwitcherProps;

    const { t, i18n } = useTranslation()

    const onToggle = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
    }

    return (
        <Button
            theme={ThemeButton.CLEAR}
            onClick={onToggle}
            className={classNames(cls.LangSwitcher, {}, [className])}
        >
            {t('Language')}
        </Button>
    )
}