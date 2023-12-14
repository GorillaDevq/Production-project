import { fireEvent, screen } from '@testing-library/react';
import { Sidebar } from 'widjets/Sidebar';
import renderWithTranslation from 'shared/lib/renderWithTranslation/renderWithTranslation';

describe('Sidebar', () => {
    test('Render sidebar', () => {
        renderWithTranslation(<Sidebar />);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });

    test('Sidebar collapsed', () => {
        renderWithTranslation(<Sidebar />);
        fireEvent.click(screen.getByTestId('toggle'));
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
    });
});
