import React, { Suspense } from 'react';
import Router from './routes';
import Loader from './components/PageLoader/Loader';

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <Router />
    </Suspense>
  );
}

export default App;
