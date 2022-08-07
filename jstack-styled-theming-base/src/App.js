import React from 'react';
import { AppProvider } from './context/AppContext'

import GlobalStyle from './styles/global';
import { Layout } from './components/Layout';

class App extends React.Component {
  render() {
    return (
      <AppProvider>
        <GlobalStyle /> 
        <Layout />
      </AppProvider>
    );
  }
}

// function App() {
//   // useLayoutEffect(() => {
//   //   // é disparado antes de renderizar o componente
//   // });

//   // const firstRender = useRef(false); 
//     // quando alterado o valor não atualiza o componente
    
//   // useEffect(() => {
//   //   // trava a primeira renderização do componente
//   //   if (firstRender.current) {
//   //     firstRender.current = false;
//   //     return;
//   //   }
//   // });

  // return (
  //   <AppProvider>
  //     <GlobalStyle /> 
  //     <Layout />
  //   </AppProvider>
  // );
// };

export default App;
