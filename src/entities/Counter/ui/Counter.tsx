import { useDispatch, useSelector } from 'react-redux';
import { getCounterValue } from 'entities/Counter';
import { useTranslation } from 'react-i18next';
import { counterActions } from '../model/slice/counterSlice';

export const Counter = () => {
    const dispatch = useDispatch();
    const counterValue = useSelector(getCounterValue);
    const { t } = useTranslation();

    const increment = () => {
        dispatch(counterActions.increment());
    };

    const decrement = () => {
        dispatch(counterActions.decrement());
    };

    return (
        <div>
            <h1 data-testid="value-title">
                {counterValue}
            </h1>
            <button onClick={increment} data-testid="increment-btn">{t('Increment')}</button>
            <button onClick={decrement} data-testid="decrement-btn">{t('Decrement')}</button>
        </div>
    );
};
