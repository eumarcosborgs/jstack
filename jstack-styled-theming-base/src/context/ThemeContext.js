import React, { createContext } from "react";
import { ThemeProvider as StyledComponentThemeProvider} from 'styled-components';

import themes from '../styles/themes';

export const ThemeContext = createContext();

export class ThemeProvider extends React.Component {
  state = {
    theme: localStorage.getItem('@JStack:theme') || 'dark'
  }

  handleToggleTheme = () => {
    this.setState((prevState) => {
      if (prevState.theme === 'dark') {
        localStorage.setItem('@JStack:theme', 'light');
        return { ...prevState, theme: 'light' };
      } else if (prevState.theme === 'light') {
        localStorage.setItem('@JStack:theme', 'dark');
        return { ...prevState, theme: 'dark' };
      }
    });
  }

  // forceUpdate = () => {
  //   this.forceUpdate();
  // }

  render() {
    const { children } = this.props;
    const { theme } = this.state;

    return (

      <ThemeContext.Provider 
        value={{
          selectedTheme: theme,
          onToggleTheme: this.handleToggleTheme
        }}
      >
        <StyledComponentThemeProvider 
          theme={themes[theme] || themes.dark}
        >
          {children}
        </StyledComponentThemeProvider>
      </ThemeContext.Provider>
    )
  }
}

// export function ThemeProvider({ children }) {
//   // const [theme, setTheme] = usePersistState('@JStack:theme', 'dark')
//   const [theme, setTheme] = useState(localStorage.getItem('@JStack:theme') || 'dark');

//   // function persistItem(key, value) {
//   //   return localStorage.setItem(key, value)
//   // }

//   // function usePersistState(key, initialValue) {
//   //   const [state, setState] = useState(() => 
//   //     localStorage.getItem(key) || persistItem(key, initialValue)
//   //   );

//   //   const setStateAndPersist = useCallback((newState) => {
//   //     setState(newState);
//   //     return persistItem(key, newState);
//   //   }, [key, setState]);

//   //   return [state, setStateAndPersist];
//   // }

//   const currentTheme = useMemo(() => {
//     return themes[theme] || themes.dark
//   }, [theme]);

//   function handleToggleTheme() {
//     // setTheme(theme === 'dark' ? 'light' : 'dark');
//     setTheme((prevState) => {
//       if (prevState === 'dark') {
//         localStorage.setItem('@JStack:theme', 'light');
//         return 'light';
//       } else if (prevState === 'light') {
//         localStorage.setItem('@JStack:theme', 'dark');
//         return 'dark';
//       }
//     });
//   }

//   return (
//     <ThemeContext.Provider 
//       value={{
//         selectedTheme: theme,
//         onToggleTheme: handleToggleTheme
//       }}
//     >
//       <StyledComponentThemeProvider theme={currentTheme}>
//         {children}
//       </StyledComponentThemeProvider>
//     </ThemeContext.Provider>
//   )
// }