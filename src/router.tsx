import { createBrowserRouter } from 'react-router-dom';
import { DefaultLayout } from './layouts';
import { Login } from './modules/Auth';
import { Dashboard } from './modules/Dashboard';

const router = createBrowserRouter([
  {
    path: '/',
    element: <DefaultLayout />,
    children: [
      {
        path: '/',
        element: <Dashboard />,
      },
    ],
  },
  {
    path: '/login',
    element: <Login />,
  },
]);

export default router;
