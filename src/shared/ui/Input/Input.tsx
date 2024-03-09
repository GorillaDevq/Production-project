import { classNames } from 'shared/lib/classNames/classNames';
import React, {
    InputHTMLAttributes, memo, useEffect, useRef, useState,
} from 'react';
import cls from './Input.module.scss';

export enum InputTheme {
    BORDER_BOTTOM = 'borderBottom',
    CLEAR = 'clear'
}

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'>

interface InputProps extends HTMLInputProps {
    className?: string;
    theme?: InputTheme;
    value?: string;
    onChange?: (value: string) => void;
    autoFocus?: boolean;
}

export const Input = memo((props: InputProps) => {
    const {
        className, theme = InputTheme.CLEAR,
        value, type = 'text', onChange,
        autoFocus, ...otherProps
    } = props;

    const inputElement = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (autoFocus) {
            inputElement.current?.focus();
        }
    }, [autoFocus]);

    const onHandlerChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(evt.target.value);
    };

    return (
        <input
            type={type}
            className={classNames(cls.Input, {}, [className, cls[theme]])}
            value={value}
            onChange={onHandlerChange}
            ref={inputElement}
            {...otherProps}
        />
    );
});
