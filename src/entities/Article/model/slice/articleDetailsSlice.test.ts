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
    user: {
        id: '1',
        username: 'Ivan',
        avatar: 'https://sun9-65.userapi.com/impg/otNK__sKAUa0SSNAkiGN9OBdEb2SK-DatZPlLw/nwkztt7dVtk.jpg?size=460x460&quality=96&sign=825e093f90336b1626b5a6dc22133658&type=album',
    },
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
