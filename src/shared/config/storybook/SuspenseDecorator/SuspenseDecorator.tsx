import { Decorator } from '@storybook/react';
import { Suspense } from 'react';
import { Loader } from 'shared/ui/Loader';

export const SuspenseDecorator = (): Decorator => (StoryComponent) => (
    <Suspense fallback={<Loader />}>
        <StoryComponent />
    </Suspense>
);
