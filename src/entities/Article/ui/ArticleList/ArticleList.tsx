import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { ArticleListItemSkeleton } from 'entities/Article/ui/ArticleListItem/ArticleListItemSkeleton';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import cls from './ArticleList.module.scss';
import { Article, ArticleView } from '../../model/types/article';

interface ArticleListProps {
    className?: string;
    articles: Article[];
    isLoading?: boolean;
    view?: ArticleView;
}

export const ArticleList = (props: ArticleListProps) => {
    const {
        className,
        articles,
        isLoading,
        view = ArticleView.SMALL,
    } = props;

    const mods: Mods = {
        [cls.articles_big]: view === ArticleView.BIG,
    };

    if (isLoading) {
        return (
            <div className={classNames(cls.articles, mods, [className])}>
                <ArticleListItemSkeleton view={view} />
                <ArticleListItemSkeleton view={view} />
                <ArticleListItemSkeleton view={view} />
                <ArticleListItemSkeleton view={view} />
                <ArticleListItemSkeleton view={view} />
                <ArticleListItemSkeleton view={view} />
                <ArticleListItemSkeleton view={view} />
            </div>
        );
    }

    const renderArticle = (article: Article) => (
        <ArticleListItem
            article={article}
            view={view}
            key={article.id}
        />
    );

    return (
        <div className={classNames(cls.articles, mods, [className])}>
            {articles.length
                ? articles.map(renderArticle)
                : null}
        </div>
    );
};
