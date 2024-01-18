import { fireEvent, screen } from '@testing-library/react';
import { Sidebar } from 'widjets/Sidebar';
import ComponentRender from 'shared/lib/ComponentRender/ComponentRender';

describe('Sidebar', () => {
    test('Render sidebar', () => {
        ComponentRender(<Sidebar />);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });

    test('Sidebar collapsed', () => {
        ComponentRender(<Sidebar />);
        fireEvent.click(screen.getByTestId('toggle'));
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
    });
});
