import { classNames } from 'shared/lib/classNames/classNames';
import { Input } from 'shared/ui/Input/Input';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { useCallback } from 'react';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { addCommentFormActions, addCommentFormReducer } from '../../model/slice/AddCommentFormSlice';
import { getAddCommentFormError, getAddCommentFormText } from '../../model/selectors/addCommentFormSelectors';
import cls from './AddCommentForm.module.scss';

export interface AddCommentFormProps {
    className?: string,
    onSendComment: (text: string) => void;
}

const initialReducers: ReducersList = {
    addCommentForm: addCommentFormReducer,
};

const AddCommentForm = (props: AddCommentFormProps) => {
    const { className, onSendComment } = props;
    const { t } = useTranslation();
    const text = useSelector(getAddCommentFormText);
    const error = useSelector(getAddCommentFormError);
    const dispatch = useAppDispatch();

    const onCommentTextChange = useCallback((value: string) => {
        dispatch(addCommentFormActions.setText(value));
    }, [dispatch]);

    const onSendHandler = useCallback(() => {
        onSendComment(text || '');
        onCommentTextChange('');
    }, [onCommentTextChange, onSendComment, text]);

    return (
        <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount>
            <div className={classNames(cls.AddCommentForm, {}, [className])}>
                <Input
                    placeholder={t('Write comment')}
                    value={text || ''}
                    onChange={onCommentTextChange}
                    className={cls.input}
                />
                <Button
                    theme={ButtonTheme.OUTLINE}
                    onClick={onSendHandler}
                >
                    {t('Submit comment')}
                </Button>
            </div>
        </DynamicModuleLoader>
    );
};

export default AddCommentForm;
