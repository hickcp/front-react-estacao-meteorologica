import * as React from 'react'
import { ChakraProvider, Flex, VStack, theme } from '@chakra-ui/react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { HomePage } from './pages/Home'
import { About } from './pages/About'
import { Header } from './components/header/Header'
export const App = () => (
  <ChakraProvider theme={theme}>
    <Flex  maxWidth="1000px" margin="0 auto">
      <VStack width="100%" margin="24px">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </BrowserRouter>
      </VStack>
    </Flex>
  </ChakraProvider>
)
