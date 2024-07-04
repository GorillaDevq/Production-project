import { ArticleType } from 'entities/Article/model/types/article';
import { ArticleDetailsSchema } from '../types/articleDetailsSchema';
import { articleDetailsReducer } from './articleDetailsSlice';
import { fetchArticleById } from '../services/fetchArticleById/fetchArticleById';

const article = {
    id: '1',
    title: 'Javascript news',
    subtitle: 'Что нового в JS за 2024 год?',
    img: 'https://teknotower.com/wp-content/uploads/2020/11/js.png',
    views: 1022,
    createdAt: '26.02.2022',
    type: [ArticleType.IT],
    blocks: [],
};

describe('articleDetailsSlice.test', () => {
    test('update profile service pending', () => {
        const state: DeepPartial<ArticleDetailsSchema> = {
            isLoading: false,
        };

        expect(articleDetailsReducer(state as ArticleDetailsSchema, fetchArticleById.pending))
            .toEqual({
                isLoading: true,
            });
    });

    test('update profile service fulfield', () => {
        const state: DeepPartial<ArticleDetailsSchema> = {
            isLoading: true,
            error: 'asfsafasf',
            data: undefined,
        };

        expect(articleDetailsReducer(state as ArticleDetailsSchema, fetchArticleById.fulfilled(article, '1', '')))
            .toEqual({
                isLoading: false,
                error: undefined,
                data: article,
            });
    });
});
