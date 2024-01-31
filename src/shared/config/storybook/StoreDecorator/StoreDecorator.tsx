import { Decorator } from '@storybook/react';
import { Provider } from 'react-redux';
import { createReduxStore } from 'app/providers/StoreProvider';

export const StoreDecorator = (): Decorator => (StoryComponent) => {
    const store = createReduxStore();

    return (
        <Provider store={store}>
            <StoryComponent />
        </Provider>
    );
};
