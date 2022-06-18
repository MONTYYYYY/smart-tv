import React from 'react';
import { Routes } from 'react-router';
import { Route, BrowserRouter } from 'react-router-dom';
import Layouts from './layouts';

const Menu = React.lazy(() => import('./components/Menu/Menu'));
const LandingPage = React.lazy(() => import('./pages/Landing/Landing'));

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Layouts.SideBarLayout component={LandingPage} sideBarContent={<Menu />} />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
