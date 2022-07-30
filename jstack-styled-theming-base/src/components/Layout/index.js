import React from 'react';

import Header from '../Header';
import PostsList from '../PostsList';
import Footer from '../Footer';

export default function Layout() {
  // useEffect(() => {
  //   () => {
  //     // Função retorna depois que o componente saiu de tela
  //   }
  // });

  // useEffect(() => {
  //   function handleScroll() {
  //     console.log('scrollou');
  //   }

  //   document.addEventListener('scroll', handleScroll);

  //   return () => document.removeEventListener('scroll', handleScroll);
  // })

  return (
    <>
      <Header />
      <PostsList />
      <Footer />
    </>
  );
}
