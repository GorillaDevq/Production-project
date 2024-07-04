import { classNames } from 'shared/lib/classNames/classNames';
import { ReactNode, useCallback } from 'react';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import CopyIcon from 'shared/assets/icons/copy.svg';
import cls from './Code.module.scss';

interface CodeProps {
    className?: string;
    text: string;
}

export const Code = (props: CodeProps) => {
    const { className, text } = props;

    const onCopy = useCallback(() => {
        navigator.clipboard.writeText(text);
    }, [text]);

    return (
        <pre className={classNames(cls.code, {}, [className])}>
            <Button className={cls.code__copy} theme={ButtonTheme.CLEAR} onClick={onCopy}>
                <CopyIcon className={cls.code__icon} />
            </Button>
            <code>
                {text}
            </code>
        </pre>
    );
};
