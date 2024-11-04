// src/App.tsx
import React from 'react';
import { MantineProvider } from '@mantine/core';
import HomePage from './Pages/HomePage';

function App() {
  return (
    <MantineProvider>
    <div className="App">
      <HomePage />
    </div>
    </MantineProvider>
  );
}

export default App;
