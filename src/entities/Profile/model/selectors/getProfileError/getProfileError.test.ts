import { StateSchema } from 'app/providers/StoreProvider';

import { getProfileError } from './getProfileError';

describe('Get Profile Error', () => {
    test('should return error', () => {
        const error = 'ERROR';

        const state: DeepPartial<StateSchema> = {
            profile: {
                error,
            },
        };
        expect(getProfileError(state as StateSchema)).toEqual(error);
    });
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileError(state as StateSchema)).toEqual(undefined);
    });
});
