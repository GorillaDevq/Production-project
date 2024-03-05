import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { getLoginState } from 'features/AuthByUsername/model/selectors/getLoginState/getLoginState';

describe('Get Login State', () => {
    test('should return login state', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                username: 'admin',
                password: '123',
            },
        };
        expect(getLoginState(state as StateSchema)).toEqual({
            username: 'admin',
            password: '123',
        });
    });
});
