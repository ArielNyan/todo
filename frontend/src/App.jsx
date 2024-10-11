import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Box } from '@chakra-ui/react'
import Home from './pages/Home'
import CreateHome from './pages/CreateHome'
import Navbar from './components/Navbar'
function App() {

  return (
    <>
      <Box minH={'100vh'}>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/create' element={<CreateHome />}/>
        </Routes>
      </Box>
    </>
  )
}

export default App
