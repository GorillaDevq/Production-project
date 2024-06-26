import { useTranslation } from 'react-i18next';
import { BugButton } from 'app/providers/ErrorBoundary/ui/BugButton';

function MainPage() {
    const { t } = useTranslation();

    return (
        <div>
            <BugButton />
            {t('Main page')}
        </div>
    );
}

export default MainPage;
