import React, { createContext, useCallback, useState, useMemo } from "react";
import { ThemeProvider as StyledComponentThemeProvider} from 'styled-components';

import themes from '../styles/themes';

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = usePersistState('@JStack:theme', 'dark')

  function persistItem(key, value) {
    return localStorage.setItem(key, value)
  }

  function usePersistState(key, initialValue) {
    const [state, setState] = useState(() => 
      localStorage.getItem(key) || persistItem(key, initialValue)
    );

    const setStateAndPersist = useCallback((newState) => {
      setState(newState);
      return persistItem(key, newState);
    }, [key, setState]);

    return [state, setStateAndPersist];
  }

  const currentTheme = useMemo(() => {
    return themes[theme] || themes.dark
  }, [theme]);

  function handleToggleTheme() {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  }

  return (
    <ThemeContext.Provider 
      value={{
        selectedTheme: theme,
        onToggleTheme: handleToggleTheme
      }}
    >
      <StyledComponentThemeProvider theme={currentTheme}>
        {children}
      </StyledComponentThemeProvider>
    </ThemeContext.Provider>
  )
}