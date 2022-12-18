import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Welcome, Resume } from './pages';
import { ThemeProvider } from './components/ThemeContext/ThemeContext';

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
