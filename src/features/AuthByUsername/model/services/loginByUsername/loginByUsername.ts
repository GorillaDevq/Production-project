import { createAsyncThunk } from '@reduxjs/toolkit';
import { User, userActions } from 'entities/User';
import i18n from 'shared/config/i18n/i18n';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localStorage';
import { ThunkConfig } from 'app/providers/StoreProvider';

interface LoginByUsername {
    username: string;
    password: string;
}

export const loginByUsername = createAsyncThunk<User, LoginByUsername, ThunkConfig<string>>(
    'login/loginByUsername',
    async (authData, thunkApi) => {
        const { dispatch, extra, rejectWithValue } = thunkApi;
        try {
            const response = await extra.api.post('/login', authData);

            if (!response.data) {
                throw new Error();
            }

            localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data));
            dispatch(userActions.setUserAuthData(response.data));
            extra.navigate('/profile');
            return response.data;
        } catch (err) {
            console.log(err);
            return rejectWithValue(i18n.t('Wrong login or password'));
        }
    },
);
