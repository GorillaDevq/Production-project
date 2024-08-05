import i18n from 'shared/config/i18n/i18n';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Profile } from '../../types/profile';

export const fetchProfileData = createAsyncThunk<Profile, string, ThunkConfig<string>>(
    'profile/fetchProfileData',
    async (profileId, thunkApi) => {
        const { extra, rejectWithValue } = thunkApi;
        try {
            const response = await extra.api.get<Profile>(`/profile/${profileId}`);

            if (!response.data) throw new Error();

            return response.data;
        } catch (err) {
            console.log(err);
            return rejectWithValue(i18n.t('Wrong profile data'));
        }
    },
);
