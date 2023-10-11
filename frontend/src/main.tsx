import './index.css'
import 'dayjs/locale/fr';
import dayjs from 'dayjs';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "@/lib/environment";
import React from 'react';
import {
  QueryClient,
  QueryClientProvider
} from '@tanstack/react-query';
import HomePage from './pages/home';
import ListPage from './pages/list';
import ReactDOM from 'react-dom/client';
import DetailsPage from './pages/details';
import LocalizedFormat from 'dayjs/plugin/localizedFormat';
import CreatePage from './pages/create';

dayjs.extend(LocalizedFormat)
dayjs.locale('fr')

const queryClient = new QueryClient()

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />
  },
  {
    path: "/list",
    element: <ListPage />
  },
  {
    path: "/details/:id/:slug",
    element: <DetailsPage />
  },
  {
    path: "/create",
    element: <CreatePage />
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>,
)
