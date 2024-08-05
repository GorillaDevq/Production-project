import { Currency } from 'entities/Currency/model/types/currency';
import { Country } from 'entities/Country/model/types/Country';

export enum ValidateProfileError {
    INCORRECT_NO_DATA = 'INCORRECT NO DATA',
    INCORRECT_USER_DATA = 'INCORRECT USER DATA',
    INCORRECT_AGE = 'INCORRECT AGE',
    INCORRECT_COUNTRY = 'INCORRECT COUNTRY',
    SERVER_ERROR = 'SERVER ERROR',
}

export interface Profile {
    id?: string;
    firstName?: string;
    lastName?: string;
    age?: number;
    currency?: Currency;
    country?: Country;
    city?: string;
    username?: string;
    avatar?: string;
}

export interface ProfileSchema {
    profileData?: Profile;
    form?: Profile;
    isLoading: boolean;
    error?: string;
    readonly: boolean;
    validateError?: ValidateProfileError[];
}
