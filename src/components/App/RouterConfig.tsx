import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home } from '../Pages/Home/Home';
import ErrorBoundary from '../ErrorBoundary';
import Page from './Page';
import { RouteItem } from '../../types';

export const routes = [
  {
    path: '/',
    title: 'tableData',
    component: Home,
  },
];

const RouterConfig = () => {
  return (
    <ErrorBoundary>
      <Routes>
        {[...routes].map(({ path, component: Component, title }: RouteItem) => (
          <Route
            key={path}
            path={path}
            element={
              <Page title={title}>
                <Component withMenu={false} />
              </Page>
            }
          ></Route>
        ))}
      </Routes>
    </ErrorBoundary>
  );
};

export default RouterConfig;
