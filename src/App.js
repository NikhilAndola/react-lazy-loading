import React, { Suspense } from 'react';
// import Home from './Home'
const Home = React.lazy(() => import('./Home'));
const About = React.lazy(() => import('./About'));

function App() {
  return (
    <div className="App">
      <h2>App root component</h2>
      <Suspense
        fallback={
          <div>
            <div>Loading... please wait...</div>{' '}
            <h1> Please wait... Home is loading</h1>
          </div>
        }
      >
        <Home />
      </Suspense>
      <Suspense
        fallback={
          <div>
            <div>Loading... please wait...</div> <h1>Wait...wait...wati...</h1>
          </div>
        }
      >
        <About />
      </Suspense>
    </div>
  );
}

export default App;
