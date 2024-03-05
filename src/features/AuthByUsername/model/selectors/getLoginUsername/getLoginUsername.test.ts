import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { getLoginUsername } from 'features/AuthByUsername/model/selectors/getLoginUsername/getLoginUsername';

describe('Get Login Username', () => {
    test('should return login username value', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: { username: 'admin' },
        };
        expect(getLoginUsername(state as StateSchema)).toBe('admin');
    });
});
