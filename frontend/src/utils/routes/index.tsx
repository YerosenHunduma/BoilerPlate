import HomePage from 'app/pages/HomePage';
import Registration from 'app/pages/Signup';
import { IRoute } from './types';

export const routes: IRoute[] = [
  {
    element: <HomePage />,
    exact: true,
    path: '/',
    isAuthenticated: false,
  },
  {
    element: <Registration />,
    exact: true,
    path: '/signup',
    isAuthenticated: false,
  },
];
