import { counterReducer, CounterSchema } from 'entities/Counter';
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
        const state = undefined;
        expect(counterReducer(state as unknown as CounterSchema, counterActions.increment()))
            .toEqual({
                value: 1,
            });
    });
});
