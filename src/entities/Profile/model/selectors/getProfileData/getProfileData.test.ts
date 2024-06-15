import { StateSchema } from 'app/providers/StoreProvider';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { getProfileData } from './getProfileData';

describe('Get Profile Data', () => {
    test('should return profile data', () => {
        const profileData = {
            username: 'admin',
            age: 22,
            country: Country.RUSSIA,
            currency: Currency.RUB,
            firstName: 'Ivan',
            lastName: 'Mikhalev',
            avatar: '2134',
            city: 'Moscow',
        };

        const state: DeepPartial<StateSchema> = {
            profile: {
                profileData,
            },
        };
        expect(getProfileData(state as StateSchema)).toEqual(profileData);
    });
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileData(state as StateSchema)).toEqual(undefined);
    });
});
