import React from 'react';
import { useTranslation } from 'react-i18next';
import { BugButton } from 'app/providers/ErrorBoundary/ui/BugButton';
import { Counter } from 'entities/Counter';

function MainPage() {
    const { t } = useTranslation();

    return (
        <div>
            <BugButton />
            {t('Main page')}
            <Counter />
        </div>
    );
}

export default MainPage;
