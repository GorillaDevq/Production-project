import { classNames } from 'shared/lib/classNames/classNames';
import { Text, TextAlign } from 'shared/ui/Text/Text';
import { Card } from 'shared/ui/Card/Card';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { ArticleView } from '../../model/types/article';
import cls from './ArticleListItem.module.scss';

interface ArticleListItemSkeletonProps {
    className?: string;
    view: ArticleView;
}

export const ArticleListItemSkeleton = (props: ArticleListItemSkeletonProps) => {
    const { className, view } = props;

    if (view === ArticleView.BIG) {
        return (
            <div className={classNames('', {}, [className, cls[view]])}>
                <Card className={cls.card}>
                    <div className={cls.card__header}>
                        <Skeleton width={30} height={30} border="50%" />
                        <Skeleton width={100} height={16} className={cls.card__username} />
                        <Skeleton width={30} height={16} className={cls.card__date} />
                    </div>
                    <Skeleton width={250} height={24} className={cls.card__title} />
                    <Skeleton height={200} />
                    <div className={cls.card__footer}>
                        <Skeleton height={36} width={200} />
                    </div>
                </Card>
            </div>
        );
    }

    return (
        <div className={classNames('', {}, [className, cls[view]])}>
            <Card>
                <div className={cls.card__container}>
                    <Skeleton width={200} height={200} className={cls.card__image} />
                </div>
                <div className={cls.card__info}>
                    <Skeleton width={130} height={24} />
                </div>
                <Skeleton width={150} height={24} />
            </Card>
        </div>
    );
};
