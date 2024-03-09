import { StateSchema } from 'app/providers/StoreProvider';
import { getLoginError } from './getLoginError';

describe('Get Login Error', () => {
    test('should return login error value', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: { error: 'Rejected' },
        };
        expect(getLoginError(state as StateSchema)).toBe('Rejected');
    });
});
