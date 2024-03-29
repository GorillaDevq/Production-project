import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Text } from 'shared/ui/Text/Text';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input, InputTheme } from 'shared/ui/Input/Input';
import { getProfileData } from '../../model/selectors/getProfileData/getProfileData';
import { getProfileError } from '../../model/selectors/getProfileError/getProfileError';
import { getProfileIsLoading } from '../../model/selectors/getProfileIsLoading/getProfileIsLoading';
import cls from './ProfileCard.module.scss';

interface ProfileCardProps {
    className?: string,
}

export const ProfileCard: FC<ProfileCardProps> = (ProfileCardProps) => {
    const { className } = ProfileCardProps;
    const { t } = useTranslation('profile');
    const data = useSelector(getProfileData);
    const error = useSelector(getProfileError);
    const isLoading = useSelector(getProfileIsLoading);

    return (
        <div className={classNames(cls.ProfileCard, {}, [className])}>
            <div className={cls.ProfileCard__header}>
                <Text title={t('Profile')} />
                <Button theme={ButtonTheme.OUTLINE} className={cls.ProfileCard__button}>
                    {t('Update profile')}
                </Button>
            </div>
            <label>
                {t('Your firstName')}
                <Input value={data?.firstName} className={cls.ProfileCard__input} />
            </label>
            <label>
                {t('Your lastName')}
                <Input value={data?.lastName} className={cls.ProfileCard__input} />
            </label>
        </div>
    );
};
