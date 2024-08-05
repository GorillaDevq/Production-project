import { classNames } from 'shared/lib/classNames/classNames';
import { Comment } from 'entities/Comment';
import { Text } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
import { CommentCard } from '../CommentCard/CommentCard';
import cls from './CommentList.module.scss';

interface CommentListProps {
    className?: string;
    comments?: Array<Comment>;
    isLoading?: boolean;
}

export const CommentList = (props: CommentListProps) => {
    const { className, comments, isLoading } = props;
    const { t } = useTranslation();

    if (isLoading) {
        return (
            <div className={classNames(cls.CommentList, {}, [className])}>
                <CommentCard isLoading />
                <CommentCard isLoading />
                <CommentCard isLoading />
            </div>
        );
    }

    return (
        <div className={classNames(cls.CommentList, {}, [className])}>
            {(comments?.length && !isLoading)
                // eslint-disable-next-line react/no-array-index-key
                ? comments.map((item, index) => (<CommentCard isLoading={isLoading} comment={item} key={index} />))
                : <Text text={t('No comments')} />}
        </div>
    );
};
