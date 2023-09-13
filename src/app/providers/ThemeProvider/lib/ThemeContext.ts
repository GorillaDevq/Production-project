import {createContext} from "react";

export enum Theme {
    DARK = 'dark',
    LIGHT = 'light',
};

export interface ThemeContextProps {
    theme? : Theme;
    setTheme? : (theme: Theme ) => void;
}

export const THEME_STORAGE_KEY = 'Theme';

export const ThemeContext = createContext<ThemeContextProps>({});