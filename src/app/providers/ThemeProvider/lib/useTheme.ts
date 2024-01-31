import { useContext, useEffect } from 'react';
import { Theme, THEME_STORAGE_KEY, ThemeContext } from 'app/providers/ThemeProvider/lib/ThemeContext';

export interface UseThemeResult {
    theme: Theme,
    toggleTheme: () => void,
}

export default function useTheme(): UseThemeResult {
    const { theme, setTheme } = useContext(ThemeContext);

    useEffect(() => {
        document.body.className = theme;
    }, [theme]);

    const toggleTheme = (): void => {
        const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK;
        setTheme(newTheme);
        localStorage.setItem(THEME_STORAGE_KEY, newTheme);
    };

    return {
        theme,
        toggleTheme,
    };
}
