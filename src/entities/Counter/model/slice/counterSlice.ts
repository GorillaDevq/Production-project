import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CounterSchema } from '../types/CounterSchema';

const initialState: CounterSchema = {
    value: 0,
};

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state, action: PayloadAction<number>) => {
            state.value += 1;
        },
        decrement: (state, action: PayloadAction<number>) => {
            state.value -= 1;
        },
    },
});

export const { actions: counterActions, reducer: counterReducer } = counterSlice;
