import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from '@/App';
import { Coin, Coins, ErrorPage } from '@/pages';

const RootRouter = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Coins />,
      },
      {
        path: '/:btc',
        element: <Coin />,
      },
    ],
  },
]);

export default RootRouter;
