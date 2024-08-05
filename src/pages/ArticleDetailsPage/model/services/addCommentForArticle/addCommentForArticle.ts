import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import i18n from 'shared/config/i18n/i18n';
import { Comment } from 'entities/Comment';
import { getUserAuthData } from 'entities/User';
import { getArticleDetailsData } from 'entities/Article';

export const addCommentForArticle = createAsyncThunk<Comment, string, ThunkConfig<string>>(
    'articleDetails/addCommentFormArticle',
    async (text, thunkApi) => {
        const {
            dispatch,
            extra,
            rejectWithValue,
            getState,
        } = thunkApi;

        const userData = getUserAuthData(getState());
        const article = getArticleDetailsData(getState());

        if (!userData || !text || !article) return rejectWithValue(i18n.t('No data'));

        try {
            const response = await extra.api.post<Comment>('/comments', {
                text,
                articleId: article.id,
                userId: userData.id,
            });

            if (!response.data) {
                throw new Error();
            }

            return { ...response.data, user: userData };
        } catch (err) {
            return rejectWithValue(i18n.t('Wrong data comment'));
        }
    },
);
