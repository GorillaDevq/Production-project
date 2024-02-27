import { FC, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { Input } from 'shared/ui/Input/Input';
import { useDispatch, useSelector } from 'react-redux';
import { loginByUsername } from 'features/AuthByUsername/model/services/loginByUsername/loginByUsername';
import { getLoginState } from '../../model/selectors/getLoginState/getLoginState';
import { loginActions } from '../../model/slice/loginSlice';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
    className?: string,
}

export const LoginForm: FC<LoginFormProps> = (LoginFormProps) => {
    const { className } = LoginFormProps;
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const { username, password } = useSelector(getLoginState);

    const onChangeUsername = useCallback((value: string) => {
        dispatch(loginActions.setUsername(value));
    }, [dispatch]);

    const onChangePassword = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value));
    }, [dispatch]);

    const onLoginClick = useCallback(() => {
        dispatch(loginByUsername({ username, password }));
    }, [dispatch, password, username]);

    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            <Input
                className={cls.LoginForm__input}
                autoFocus
                placeholder="Введите логин"
                onChange={onChangeUsername}
                value={username}
            />
            <Input
                className={cls.LoginForm__input}
                placeholder="Введите пароль"
                onChange={onChangePassword}
                value={password}
            />
            <Button
                theme={ButtonTheme.OUTLINE}
                className={cls.LoginForm__submit}
                onClick={onLoginClick}
            >
                {t('Enter')}
            </Button>
        </div>
    );
};
