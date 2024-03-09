import { FC, useEffect } from 'react';
import { useDispatch, useStore } from 'react-redux';
import { ReduxStoreWithManager, StateSchemaKey } from 'app/providers/StoreProvider/config/StateSchema';
import { Reducer } from '@reduxjs/toolkit';

export type ReducersList = {
    [name in StateSchemaKey]?: Reducer;
}

interface DynamicModuleLoaderProps {
    reducers: ReducersList;
    removeAfterUnmount?: Boolean
}

export const DynamicModuleLoader: FC<DynamicModuleLoaderProps> = (DynamicModuleLoaderProps) => {
    const {
        children,
        reducers,
        removeAfterUnmount,
    } = DynamicModuleLoaderProps;
    const dispatch = useDispatch();
    const store = useStore() as ReduxStoreWithManager;

    useEffect(() => {
        Object.entries(reducers).forEach(([stateKey, reducer]) => {
            store.reducerManager.add(stateKey as StateSchemaKey, reducer);
            dispatch({ type: `@INIT ${stateKey} state` });
        });
        return () => {
            if (removeAfterUnmount) {
                Object.entries(reducers).forEach(([stateKey, reducer]) => {
                    store.reducerManager.remove(stateKey as StateSchemaKey);
                    dispatch({ type: `@DESTROY ${stateKey} state` });
                });
            }
        };
        // eslint-disable-next-line
    }, []);

    return (
        <>
            { children }
        </>
    );
};
