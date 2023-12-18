import Cookies from 'js-cookie';
import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { routeConstants } from 'utils/constants';
import { routes } from 'utils/routes';
import { IRoute } from 'utils/routes/types';
import { cookieKeys } from 'utils/constants';
import { v4 as uuid } from 'uuid';
import { DefaultLayout } from './layouts/DefaultLayout/Loadable';

const AuthenticatedRoute = ({ children }: any) => {
  const authToken = Cookies.get(cookieKeys.authToken);

  if (!authToken) {
    return <Navigate to={routeConstants.login} />;
  }
  return <>{children}</>;
};

function App() {
  return (
    <BrowserRouter>
      <DefaultLayout>
        <Routes>
          {routes.map((route: IRoute) => (
            <React.Fragment key={uuid()}>
              {route.isAuthenticated ? (
                <Route
                  element={
                    <AuthenticatedRoute>{route.element}</AuthenticatedRoute>
                  }
                  path={route.path}
                />
              ) : (
                <Route element={route.element} path={route.path} />
              )}
            </React.Fragment>
          ))}
        </Routes>
      </DefaultLayout>
    </BrowserRouter>
  );
}

export default App;
