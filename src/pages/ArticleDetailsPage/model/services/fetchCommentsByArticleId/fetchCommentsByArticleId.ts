import i18n from 'shared/config/i18n/i18n';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Comment } from 'entities/Comment';

export const fetchCommentsByArticleId = createAsyncThunk<Array<Comment>, string| undefined, ThunkConfig<string>>(
    'articleDetailsComment/fetchCommentsByArticleId',
    async (articleId, thunkApi) => {
        const { extra, rejectWithValue } = thunkApi;

        if (!articleId) return rejectWithValue('error');

        try {
            const response = await extra.api.get<Array<Comment>>('/comments', {
                params: {
                    articleId,
                    _expand: 'user',
                },
            });

            if (!response.data) throw new Error();

            return response.data;
        } catch (err) {
            console.log(err);
            return rejectWithValue(i18n.t('Wrong comment data'));
        }
    },
);
