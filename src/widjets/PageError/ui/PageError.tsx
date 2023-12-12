import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';
import cls from './PageError.module.scss';

interface PageErrorProps {
    className?: string,
}

export const PageError: FC<PageErrorProps> = (PageErrorProps) => {
    const { t } = useTranslation();
    const { className } = PageErrorProps;

    // eslint-disable-next-line no-restricted-globals
    const onReload = () => location.reload();

    return (
        <div className={classNames(cls.PageError, {}, [className])}>
            <Button onClick={onReload}>{t('Reload page')}</Button>
            {t('Throw Error')}
        </div>
    );
};
