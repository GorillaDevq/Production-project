import { FC } from 'react';
import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text';
import { Input } from 'shared/ui/Input/Input';
import { Loader } from 'shared/ui/Loader';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Currency, CurrencySelect } from 'entities/Currency';
import { Country, CountrySelect } from 'entities/Country';
import { Profile } from '../../model/types/profile';
import cls from './ProfileCard.module.scss';

interface ProfileCardProps {
    className?: string;
    data?: Profile;
    isLoading?: boolean;
    error?: string;
    readonly?: boolean;
    onChangeFirstName?: (value: string) => void;
    onChangeLastName?: (value: string) => void;
    onChangeAge?: (value: string) => void;
    onChangeCity?: (value: string) => void;
    onChangeAvatar?: (value: string) => void;
    onChangeUsername?: (value: string) => void;
    onChangeCurrency?: (value: Currency) => void;
    onChangeCountry?: (value: Country) => void;
}

export const ProfileCard: FC<ProfileCardProps> = (ProfileCardProps) => {
    const {
        className,
        data,
        isLoading,
        error,
        readonly,
        onChangeFirstName,
        onChangeLastName,
        onChangeAge,
        onChangeCity,
        onChangeAvatar,
        onChangeUsername,
        onChangeCurrency,
        onChangeCountry,
    } = ProfileCardProps;
    const { t } = useTranslation('profile');

    if (isLoading) {
        return (
            <div className={classNames(cls.ProfileCard, {}, [className, cls.loading])}>
                <Loader />
            </div>
        );
    }

    if (error) {
        return (
            <div className={classNames(cls.ProfileCard, {}, [className, cls.error])}>
                <Text
                    theme={TextTheme.ERROR}
                    title={t('There was an error loading')}
                    text={t('Try to reload page')}
                    align={TextAlign.CENTER}
                />
            </div>
        );
    }

    const mods: Mods = {
        [cls.editing]: !readonly,
    };

    return (
        <div className={classNames(cls.ProfileCard, mods, [className])}>
            {data?.avatar && (
                <div className={cls.ProfileCard__avatar}>
                    <Avatar src={data?.avatar} alt="Avatar" size={200} />
                </div>
            )}
            <label>
                {t('Your firstName')}
                <Input
                    value={data?.firstName}
                    className={cls.ProfileCard__input}
                    onChange={onChangeFirstName}
                    readonly={readonly}
                />
            </label>
            <label>
                {t('Your lastName')}
                <Input
                    value={data?.lastName}
                    className={cls.ProfileCard__input}
                    onChange={onChangeLastName}
                    readonly={readonly}
                />
            </label>
            <label>
                {t('Your age')}
                <Input
                    value={data?.age}
                    className={cls.ProfileCard__input}
                    onChange={onChangeAge}
                    readonly={readonly}
                />
            </label>
            <label>
                {t('Your city')}
                <Input
                    value={data?.city}
                    className={cls.ProfileCard__input}
                    onChange={onChangeCity}
                    readonly={readonly}
                />
            </label>
            <label>
                {t('Your username')}
                <Input
                    value={data?.username}
                    className={cls.ProfileCard__input}
                    onChange={onChangeUsername}
                    readonly={readonly}
                />
            </label>
            <label>
                {t('Your avatar')}
                <Input
                    value={data?.avatar}
                    className={cls.ProfileCard__input}
                    onChange={onChangeAvatar}
                    readonly={readonly}
                />
            </label>
            <CurrencySelect
                value={data?.currency}
                onChange={onChangeCurrency}
                readonly={readonly}
            />
            <CountrySelect
                value={data?.country}
                onChange={onChangeCountry}
                readonly={readonly}
            />
        </div>
    );
};
