import { useTranslation } from 'react-i18next';

export default function ProfilePage() {
    const { t } = useTranslation();

    return (
        <div>
            {t('Profile page')}
        </div>
    );
}
