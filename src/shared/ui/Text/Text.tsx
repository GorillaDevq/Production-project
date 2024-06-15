import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './Text.module.scss';

export enum TextTheme {
    PRIMARY = 'primary',
    ERROR = 'error'
}

export enum TextAlign {
    CENTER = 'center',
    RIGHT = 'right',
    LEFT = 'left'
}

interface TextProps {
    className?: string;
    title?: string;
    text?: string;
    theme?: TextTheme;
    align?: TextAlign;
}

export const Text = memo((TextProps: TextProps) => {
    const {
        className, title, text,
        theme = TextTheme.PRIMARY,
        align = TextAlign.LEFT,
    } = TextProps;

    return (
        <div className={classNames(cls.Text, {}, [className, cls[theme], cls[align]])}>
            {Boolean(title) && <p className={cls.title}>{title}</p>}
            {Boolean(text) && <p className={cls.text}>{text}</p>}
        </div>
    );
});
