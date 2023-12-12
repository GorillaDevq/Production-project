import { FC, useEffect, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';

interface BugButtonProps {
    className?: string,
}

// Кнопка для теста ErrorBoundary
export const BugButton: FC<BugButtonProps> = (BugButtonProps) => {
    const { t } = useTranslation();
    const [error, setError] = useState(false);
    const { className } = BugButtonProps;

    useEffect(() => {
        if (error) {
            throw new Error();
        }
    }, [error]);

    const onClick = () => setError(true);

    return (
        <Button className={classNames('', {}, [className])} onClick={onClick}>
            {t('bug button')}
        </Button>
    );
};
