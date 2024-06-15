import { classNames } from 'shared/lib/classNames/classNames';
import { Select } from 'shared/ui/Select/Select';
import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { Country } from '../../model/types/Country';

interface CountrySelectProps {
    className?: string;
    value?: Country;
    onChange?: (country: Country) => void;
    readonly?: boolean;
}

const options = [
    { value: Country.ARMENIA, content: Country.ARMENIA },
    { value: Country.KAZAKHSTAN, content: Country.KAZAKHSTAN },
    { value: Country.BELARUS, content: Country.BELARUS },
    { value: Country.RUSSIA, content: Country.RUSSIA },
    { value: Country.UKRAINE, content: Country.UKRAINE },
];

export const CountrySelect = memo(({
    className, value, onChange, readonly,
}: CountrySelectProps) => {
    const { t } = useTranslation('profile');

    const onChangeHandler = useCallback((value: string) => {
        onChange?.(value as Country);
    }, [onChange]);

    return (
        <Select
            className={classNames('', {}, [className])}
            label={t('Your country')}
            options={options}
            onChange={onChangeHandler}
            value={value}
            readonly={readonly}
        />
    );
});
