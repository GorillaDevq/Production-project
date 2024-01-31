import { counterReducer } from './model/slice/counterSlice';
import { getCounterValue } from './model/selectors/getCounterValue/getCounterValue';
import type { CounterSchema } from './model/types/CounterSchema';
import { Counter } from './ui/Counter';

export {
    counterReducer,
    CounterSchema,
    Counter,
    getCounterValue,
};
