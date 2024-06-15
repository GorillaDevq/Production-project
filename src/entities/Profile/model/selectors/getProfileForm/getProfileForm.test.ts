import { StateSchema } from 'app/providers/StoreProvider';

import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { getProfileForm } from './getProfileForm';

describe('Get Profile form data', () => {
    test('should return form data', () => {
        const form = {
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
                form,
            },
        };
        expect(getProfileForm(state as StateSchema)).toEqual(form);
    });
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileForm(state as StateSchema)).toEqual(undefined);
    });
});
