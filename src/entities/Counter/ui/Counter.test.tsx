import { fireEvent, screen } from '@testing-library/react';
import ComponentRender from 'shared/lib/tests/ComponentRender/ComponentRender';
import userEvent from '@testing-library/user-event';
import { Counter } from './Counter';

describe('Counter', () => {
    test('Render counter', () => {
        ComponentRender(<Counter />);
        expect(screen.getByTestId('value-title')).toBeInTheDocument();
        expect(screen.getByTestId('increment-btn')).toBeInTheDocument();
        expect(screen.getByTestId('decrement-btn')).toBeInTheDocument();
    });

    test('Counter increment', async () => {
        ComponentRender(<Counter />, {
            initialState: { counter: { value: 10 } },
        });
        await userEvent.click(screen.getByTestId('increment-btn'));
        expect(screen.getByTestId('value-title')).toHaveTextContent('11');
    });

    test('Counter decrement', async () => {
        ComponentRender(<Counter />, {
            initialState: { counter: { value: 10 } },
        });
        await userEvent.click(screen.getByTestId('decrement-btn'));
        expect(screen.getByTestId('value-title')).toHaveTextContent('9');
    });
});
