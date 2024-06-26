import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleImageBlockComponent.module.scss';

interface ArticleImageBlockComponentProps {
    className?: string,
}

export const ArticleImageBlockComponent = (props: ArticleImageBlockComponentProps) => {
    const { className } = props;

    return (
        <div className={classNames(cls.ArticleImageBlockComponent, {}, [className])} />
    );
};
