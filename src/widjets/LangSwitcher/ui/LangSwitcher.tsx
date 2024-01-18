import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import cls from './LangSwitcher.module.scss';

interface LangSwitcherProps {
    className?: string,
    short?: boolean,
}

export const LangSwitcher: FC<LangSwitcherProps> = (LangSwitcherProps) => {
    const { className, short } = LangSwitcherProps;

    const { t, i18n } = useTranslation();

    const onToggle = async () => {
        await i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };

    return (
        <Button
            theme={ButtonTheme.CLEAR}
            onClick={onToggle}
            className={classNames(cls.LangSwitcher, {}, [className])}
        >
            {t(short ? 'LanguageShort' : 'Language')}
        </Button>
    );
};
