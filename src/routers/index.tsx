import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

import MainLayout from '../layout/MainLayout';
import { AnimeList } from '../views/AnimeList';
import { AnimeDetail } from '../views/AnimeDetail';
import { AnimeCollectionList } from '../views/AnimeCollectionList';
import { AnimeCollectionDetail } from '../views/AnimeCollectionDetail';


// type Params = Record<string, string>;

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <AnimeList />,
      },
      {
        path: '/anime/:id',
        element: <AnimeDetail />,
      },
      {
        path: '/collections',
        element: <AnimeCollectionList />,
      },
      {
        path: '/collections/:id',
        element: <AnimeCollectionDetail />,
      },
    ],
  },
]);

export default router;
