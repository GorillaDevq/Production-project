import { DeepPartial } from '@reduxjs/toolkit';
import { LoginSchema } from '../types/loginSchema';
import { loginReducer, loginActions } from './loginSlice';

describe('loginSlice.test', () => {
    test('set Username', () => {
        const state: DeepPartial<LoginSchema> = { username: '' };
        expect(loginReducer(state as LoginSchema, loginActions.setUsername('admin')))
            .toEqual({ username: 'admin' });
    });
    test('set Password', () => {
        const state: DeepPartial<LoginSchema> = { password: '' };
        expect(loginReducer(state as LoginSchema, loginActions.setPassword('123')))
            .toEqual({ password: '123' });
    });
});
