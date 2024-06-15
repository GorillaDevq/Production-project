import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchProfileData } from '../services/fetchProfileData/fetchProfileData';
import { Profile, ProfileSchema } from '../types/profile';
import { updateProfileData } from '../services/updateProfileData/updateProfileData';

const initialState: ProfileSchema = {
    isLoading: false,
    readonly: true,
    error: undefined,
    profileData: undefined,
    form: undefined,
};

const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        setReadonly: (state, action: PayloadAction<boolean>) => {
            state.readonly = action.payload;
        },
        cancelEdit: (state) => {
            state.readonly = true;
            state.validateError = undefined;
            state.form = state.profileData;
        },
        updateProfile: (state, action: PayloadAction<Profile>) => {
            state.form = {
                ...state.form,
                ...action.payload,
            };
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProfileData.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchProfileData.rejected, (state, action) => {
                state.error = action.payload;
                state.isLoading = false;
            })
            .addCase(fetchProfileData.fulfilled, (state, action: PayloadAction<Profile>) => {
                state.isLoading = false;
                state.readonly = true;
                state.profileData = action.payload;
                state.form = action.payload;
            })
            .addCase(updateProfileData.pending, (state) => {
                state.validateError = undefined;
                state.isLoading = true;
            })
            .addCase(updateProfileData.rejected, (state, action) => {
                state.validateError = action.payload;
                state.isLoading = false;
            })
            .addCase(updateProfileData.fulfilled, (state, action: PayloadAction<Profile>) => {
                state.isLoading = false;
                state.readonly = true;
                state.profileData = action.payload;
                state.form = action.payload;
                state.validateError = undefined;
            });
    },
});

export const { actions: profileActions, reducer: profileReducer } = profileSlice;
