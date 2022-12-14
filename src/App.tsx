import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Welcome } from './pages/Welcome';
import { Resume } from './pages/Resume';
import { ThemeProvider } from './components/ThemeContext';

export const App = () => {
  return (
    <ThemeProvider>
      <Routes>
        <Route path='/' element={<Welcome />} />
        <Route path='/resume' element={<Resume />} />
      </Routes>
    </ThemeProvider>
  );
};
