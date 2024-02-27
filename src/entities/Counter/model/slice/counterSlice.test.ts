import { DeepPartial } from '@reduxjs/toolkit';
import { counterReducer, CounterSchema } from 'entities/Counter';
import { StateSchema } from 'app/providers/StoreProvider';
import { counterActions } from 'entities/Counter/model/slice/counterSlice';

describe('counterSlice.test', () => {
    test('decrement', () => {
        const state: CounterSchema = {
            value: 10,
        };
        expect(counterReducer(state, counterActions.decrement()))
            .toEqual({
                value: 9,
            });
    });
    test('increment', () => {
        const state: CounterSchema = {
            value: 10,
        };
        expect(counterReducer(state, counterActions.increment()))
            .toEqual({
                value: 11,
            });
    });
    test('with empty state', () => {
        const state: CounterSchema = undefined;
        expect(counterReducer(state, counterActions.increment()))
            .toEqual({
                value: 1,
            });
    });
});