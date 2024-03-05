import axios from 'axios';
import { Dispatch } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { TestAsyncThunk } from 'shared/lib/TestAsyncThunk/TestAsyncThunk';
import { loginByUsername } from './loginByUsername';

jest.mock('axios');
const mockedAxios = jest.mocked(axios, true);

describe('loginByUsername.test', () => {
    test('success login', async () => {
        const userValue = { username: '123', id: 1 };
        mockedAxios.post.mockReturnValue(Promise.resolve({ data: userValue }));

        const thunkAsync = new TestAsyncThunk(loginByUsername);
        const response = await thunkAsync.callThunk({ username: '123', password: '123' });

        expect(thunkAsync.dispatch).toHaveBeenCalledTimes(3);
        expect(mockedAxios.post).toHaveBeenCalled();
        expect(response.meta.requestStatus).toBe('fulfilled');
        expect(response.payload).toEqual(userValue);
    });

    test('error login', async () => {
        mockedAxios.post.mockReturnValue(Promise.resolve({ status: 403 }));
        const thunkAsync = new TestAsyncThunk(loginByUsername);
        const response = await thunkAsync.callThunk({ username: '123', password: '123' });

        expect(thunkAsync.dispatch).toHaveBeenCalledTimes(2);
        expect(mockedAxios.post).toHaveBeenCalled();
        expect(response.meta.requestStatus).toBe('rejected');
        expect(response.payload).toEqual('Wrong login or password');
    });
});
