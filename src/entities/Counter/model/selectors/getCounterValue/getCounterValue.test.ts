import { getCounterValue } from 'entities/Counter';
import { StateSchema } from 'app/providers/StoreProvider';

describe('getCounterValue.test', () => {
    test('Get state value = number', () => {
        const state: DeepPartial<StateSchema> = {
            counter: { value: 10 },
        };
        expect(getCounterValue(state as StateSchema)).toBe(10);
    });
});
