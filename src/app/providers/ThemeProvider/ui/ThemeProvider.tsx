import React, { FC, useMemo, useState } from 'react';
import { Theme, THEME_STORAGE_KEY, ThemeContext } from '../lib/ThemeContext';

const defaultTheme = localStorage.getItem(THEME_STORAGE_KEY) as Theme || Theme.LIGHT;

const ThemeProvider: FC = ({ children }) => {
    const [theme, setTheme] = useState<Theme>(defaultTheme);

    const defaultProps = useMemo(() => ({
        theme,
        setTheme,
    }), [theme]);

    return (
        <ThemeContext.Provider value={defaultProps}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;
