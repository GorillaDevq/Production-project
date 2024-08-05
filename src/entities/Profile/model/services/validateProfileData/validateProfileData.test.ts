import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { ValidateProfileError } from 'entities/Profile';
import { validateProfileData } from './validateProfile';

const profileData = {
    id: '1',
    username: 'admin',
    age: 22,
    country: Country.RUSSIA,
    currency: Currency.RUB,
    firstName: 'Ivan',
    lastName: 'Mikhalev',
    avatar: '2134',
    city: 'Moscow',
};

describe('validateProfile.test', () => {
    test('success validate', async () => {
        const result = validateProfileData(profileData);

        expect(result).toEqual([]);
    });

    test('without fistName or lastName', async () => {
        const result = validateProfileData({ ...profileData, firstName: '', lastName: '' });

        expect(result).toEqual([ValidateProfileError.INCORRECT_USER_DATA]);
    });
    test('without  age', async () => {
        const result = validateProfileData({ ...profileData, age: undefined });

        expect(result).toEqual([ValidateProfileError.INCORRECT_AGE]);
    });
    test('without  country', async () => {
        const result = validateProfileData({ ...profileData, country: undefined });

        expect(result).toEqual([ValidateProfileError.INCORRECT_COUNTRY]);
    });
    test('without fistName and age', async () => {
        const result = validateProfileData({ ...profileData, firstName: '', age: undefined });

        expect(result).toEqual([ValidateProfileError.INCORRECT_USER_DATA, ValidateProfileError.INCORRECT_AGE]);
    });
    test('incorrect all', async () => {
        const result = validateProfileData({
            ...profileData, firstName: '', age: undefined, country: undefined,
        });

        expect(result).toEqual([
            ValidateProfileError.INCORRECT_USER_DATA,
            ValidateProfileError.INCORRECT_AGE,
            ValidateProfileError.INCORRECT_COUNTRY,
        ]);
    });
});
