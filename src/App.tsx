import React from 'react';
import { AnimeList } from './views/AnimeList';
import { Pagination } from './components/Pagination';
import { PageProvider } from './contexts/PageContext';



function App() {
  return (
    <>
    <PageProvider>
      <AnimeList />
      <Pagination />
    </PageProvider>
    </>
    
  );
}

export default App;
