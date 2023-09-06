import * as React from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { HomePage } from './pages/Home';
import { About } from './pages/About';

export const App = () => (
  <ChakraProvider theme={theme}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  </ChakraProvider>
);
