import { Decorator } from '@storybook/react';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { DeepPartial } from '@reduxjs/toolkit';

export const StoreDecorator = (state: DeepPartial<StateSchema>): Decorator => (StoryComponent) => (
    <StoreProvider initialState={state}>
        <StoryComponent />
    </StoreProvider>
);
