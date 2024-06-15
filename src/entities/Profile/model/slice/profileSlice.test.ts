import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { updateProfileData, ValidateProfileError } from 'entities/Profile';
import { ProfileSchema } from '../types/profile';
import { profileReducer, profileActions } from './profileSlice';

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

describe('profileSlice.test', () => {
    test('set readonly', () => {
        const state: DeepPartial<ProfileSchema> = { readonly: false };

        expect(profileReducer(state as ProfileSchema, profileActions.setReadonly(true)))
            .toEqual({ readonly: true });
    });
    test('cancel edit', () => {
        const state: DeepPartial<ProfileSchema> = {
            readonly: false,
            validateError: undefined,
            form: undefined,
            profileData,
        };

        expect(profileReducer(state as ProfileSchema, profileActions.cancelEdit()))
            .toEqual({
                readonly: true,
                validateError: undefined,
                form: profileData,
                profileData,
            });
    });
    test('update profile', () => {
        const state: DeepPartial<ProfileSchema> = {
            form: profileData,
        };

        expect(profileReducer(state as ProfileSchema, profileActions.updateProfile({ username: '123' })))
            .toEqual({
                form: {
                    ...profileData,
                    username: '123',
                },
            });
    });

    test('update profile service pending', () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: false,
            validateError: [ValidateProfileError.SERVER_ERROR],
        };

        expect(profileReducer(state as ProfileSchema, updateProfileData.pending))
            .toEqual({
                isLoading: true,
                validateError: undefined,
            });
    });

    test('update profile service fulfield', () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: true,
            readonly: false,
            validateError: [ValidateProfileError.SERVER_ERROR],
            form: undefined,
            profileData: undefined,
        };

        expect(profileReducer(state as ProfileSchema, updateProfileData.fulfilled(profileData, '')))
            .toEqual({
                isLoading: false,
                readonly: true,
                validateError: undefined,
                form: profileData,
                profileData,
            });
    });
});
