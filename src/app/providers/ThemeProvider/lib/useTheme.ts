import { useContext, useEffect } from 'react';
import { Theme, THEME_STORAGE_KEY, ThemeContext } from 'app/providers/ThemeProvider/lib/ThemeContext';

export interface UseThemeResult {
    theme: Theme,
    toggleTheme: () => void,
}

export default function useTheme(): UseThemeResult {
    const { theme, setTheme } = useContext(ThemeContext);

    useEffect(() => {
        document.body.className = theme || '';
    }, [theme]);

    const toggleTheme = (): void => {
        let newTheme: Theme;
        switch (theme) {
        case Theme.DARK:
            newTheme = Theme.LIGHT;
            break;
        case Theme.LIGHT:
            newTheme = Theme.ORANGE;
            break;
        case Theme.ORANGE:
            newTheme = Theme.DARK;
            break;
        default:
            newTheme = Theme.LIGHT;
        }
        setTheme?.(newTheme);
        localStorage.setItem(THEME_STORAGE_KEY, newTheme);
    };

    return {
        theme: theme || Theme.LIGHT,
        toggleTheme,
    };
}
