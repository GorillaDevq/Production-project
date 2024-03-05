import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { getLoginIsLoading } from './getLoginIsLoading';

describe('Get Login IsLoading', () => {
    test('should return login isLoading value', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: { isLoading: true },
        };
        expect(getLoginIsLoading(state as StateSchema)).toBe(true);
    });
});
