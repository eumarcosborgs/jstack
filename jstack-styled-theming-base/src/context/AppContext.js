import React from "react";
import { ThemeProvider } from './ThemeContext';

export class AppProvider extends React.Component {
  constructor (props) {
    super(props);
  }

  render() {
    const { children } = this.props;

    return (
      <ThemeProvider>
        {children}
      </ThemeProvider>
    );
  }
}

// export function AppProvider({ children }) {
//   return (
//     <ThemeProvider>
//       {children}
//     </ThemeProvider>
//   );
// }