import { StateSchema } from 'app/providers/StoreProvider';
import { getLoginPassword } from './getLoginPassword';

describe('Get Login Password', () => {
    test('should return login password value', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: { password: '123' },
        };
        expect(getLoginPassword(state as StateSchema)).toBe('123');
    });
});
