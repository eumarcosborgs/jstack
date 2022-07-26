import React from "react";
import { ThemeProvider } from './ThemeContext';

export function AppProvider({ children }) {
  return (
    <ThemeProvider>
      {children}
    </ThemeProvider>
  );
}