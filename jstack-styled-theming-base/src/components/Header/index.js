import React, { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';

import { Container } from './styles';

export default function Header() {
  const { selectedTheme, onToggleTheme }  = useContext(ThemeContext);

  return (
    <Container>
      <h1>JStack's Blog</h1>
      <button 
        type="button"
        onClick={onToggleTheme}
      >
        {selectedTheme === 'light' ? '🌚' : '🌞'}
      </button>
    </Container>
  );
}