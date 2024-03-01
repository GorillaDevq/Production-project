import { FC, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { Input } from 'shared/ui/Input/Input';
import { useDispatch, useSelector } from 'react-redux';
import { loginByUsername } from 'features/AuthByUsername/model/services/loginByUsername/loginByUsername';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { getLoginState } from '../../model/selectors/getLoginState/getLoginState';
import { loginActions } from '../../model/slice/loginSlice';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
    className?: string;
    onClose: () => void;
}

export const LoginForm: FC<LoginFormProps> = (LoginFormProps) => {
    const { className, onClose } = LoginFormProps;
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const {
        username, password, error, isLoading,
    } = useSelector(getLoginState);

    const onChangeUsername = useCallback((value: string) => {
        dispatch(loginActions.setUsername(value));
    }, [dispatch]);

    const onChangePassword = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value));
    }, [dispatch]);

    const onLoginClick = useCallback(() => {
        dispatch(loginByUsername({ username, password }));
        onClose();
    }, [dispatch, password, username, onClose]);

    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            <Text title={t('Authorization form')} />
            {Boolean(error) && (
                <Text text={error} theme={TextTheme.ERROR} />
            )}
            <Input
                className={cls.LoginForm__input}
                autoFocus
                placeholder={t('Enter login')}
                onChange={onChangeUsername}
                value={username}
            />
            <Input
                className={cls.LoginForm__input}
                placeholder={t('Enter password')}
                onChange={onChangePassword}
                value={password}
            />
            <Button
                theme={ButtonTheme.OUTLINE}
                className={cls.LoginForm__submit}
                onClick={onLoginClick}
                disabled={isLoading}
            >
                {t('Enter')}
            </Button>
        </div>
    );
};
