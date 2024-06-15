import { Decorator } from '@storybook/react';
import { Suspense, useEffect } from 'react';
import { Loader } from 'shared/ui/Loader';
import { I18nextProvider } from 'react-i18next';
import i18n from 'shared/config/i18n/i18n';

export const TranslationDecorator = (): Decorator => (StoryComponent, { globals }) => {
    const { locale } = globals;

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        i18n.changeLanguage(locale);
    }, [locale]);

    return (
        <Suspense fallback={<Loader />}>
            <I18nextProvider i18n={i18n}>
                <StoryComponent />
            </I18nextProvider>
        </Suspense>
    );
};
