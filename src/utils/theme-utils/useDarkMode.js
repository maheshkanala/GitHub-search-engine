import { useEffect, useState } from 'react';
import { THEME } from "../../constants/appConstants";

/**
 * Custom hook to store/update theme preference 
 */
export const useDarkMode = () => {
    const [theme, setTheme] = useState(THEME.LIGHT);
    const [mountedComponent, setMountedComponent] = useState(false);

    const setMode = mode => {
        window.localStorage.setItem(THEME.LOCAL_STORAGE_KEY, mode)
        setTheme(mode)
    };

    const themeToggler = () => {
        theme === THEME.LIGHT ? setMode(THEME.DARK) : setMode(THEME.LIGHT)
    };

    useEffect(() => {
        const localTheme = window.localStorage.getItem(THEME.LOCAL_STORAGE_KEY);
        localTheme && setTheme(localTheme)
        setMountedComponent(true)
    }, []);
    return [theme, themeToggler, mountedComponent]
};