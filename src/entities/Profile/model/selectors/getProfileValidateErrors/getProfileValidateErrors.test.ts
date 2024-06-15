import { StateSchema } from 'app/providers/StoreProvider';
import { ValidateProfileError } from 'entities/Profile';
import { getProfileValidateErrors } from './getProfileValidateErrors';

describe('Get Profile validate errors', () => {
    test('should return validate errors', () => {
        const validateError = [ValidateProfileError.SERVER_ERROR, ValidateProfileError.INCORRECT_AGE];
        const state: DeepPartial<StateSchema> = {
            profile: {
                validateError,
            },
        };
        expect(getProfileValidateErrors(state as StateSchema)).toEqual(validateError);
    });
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileValidateErrors(state as StateSchema)).toBe(undefined);
    });
});
