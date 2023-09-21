import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Main from './Main';
import Intro from './Intro';
import Job from './Job';
import { RouteProvider } from './context/RouteContext';

const App = () => {
  return (
    <RouteProvider>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/intro' element={<Intro />}/>
        <Route path='/job' element={<Job />} />
      </Routes>
    </RouteProvider>
  );
};

export default App;