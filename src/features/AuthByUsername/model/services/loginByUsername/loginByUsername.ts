import { createAsyncThunk } from '@reduxjs/toolkit';
import { User } from 'entities/User';
import axios from 'axios';

interface LoginByUsername {
    username: string;
    password: string;
}

export const loginByUsername = createAsyncThunk<User, LoginByUsername>(
    'login/loginByUsername',
    async (authData, thunkAPI) => {
        try {
            const response = await axios.post('http://localhost:8000/login', authData);
            if (!response.data) {
                throw new Error();
            }
            return response.data;
        } catch (err) {
            console.log(err);
            return thunkAPI.rejectWithValue('error');
        }
    },
);