import i18n from 'shared/config/i18n/i18n';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Article } from 'entities/Article';

export const fetchArticlesList = createAsyncThunk<Array<Article>, void, ThunkConfig<string>>(
    'articlesPage/fetchArticlesList',
    async (_, thunkApi) => {
        const { extra, rejectWithValue } = thunkApi;
        try {
            const response = await extra.api.get<Array<Article>>('/articles', {
                params: {
                    _expand: 'user',
                },
            });

            if (!response.data) throw new Error();

            return response.data;
        } catch (err) {
            console.log(err);
            return rejectWithValue(i18n.t('Wrong article data'));
        }
    },
);
