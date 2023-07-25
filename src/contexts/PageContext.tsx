import React, { useState, createContext, useContext } from 'react';

type PageContextType = {
  page: number;
  setPage: (page: number) => void;
};

const PageContext = createContext<PageContextType>({
  page: 1,
  setPage: () => {}
});

export function usePage() {
  return useContext(PageContext);
}

export function PageProvider({ children }: { children: React.ReactNode }) {
  const [page, setPage] = useState(1);

  return (
    <PageContext.Provider value={{ page, setPage }}>
      {children}
    </PageContext.Provider>
  );
}
