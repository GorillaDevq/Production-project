import { StateSchema } from 'app/providers/StoreProvider';

import { getProfileFirstName } from './getProfileFirstName';

describe('Get Profile first name', () => {
    test('should return first name', () => {
        const profileData = {
            firstName: 'Ivan',
        };

        const state: DeepPartial<StateSchema> = {
            profile: {
                profileData,
            },
        };
        expect(getProfileFirstName(state as StateSchema)).toEqual(profileData.firstName);
    });
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileFirstName(state as StateSchema)).toEqual('');
    });
});
