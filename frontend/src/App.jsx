// import { useState } from 'react'

import './App.css'
import {BrowserRouter, Routes, Route} from "react-router-dom"

// import {Box} from '@mui/material'
import ServiceForm from './componets/serviceForm'
import NavBar from './componets/NavBar';

function App() {


  return (
    <>
    




    <div className="App">
      <BrowserRouter>
        {/* <Navbar /> */}
        <NavBar />
        <div className="pages">
          <Routes>
            <Route 
              path="/" 
              element={<Home />} 
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>



      {/* <ServiceForm/> */}


        {/* <Box component="section" sx={{ p: 2, border: '1px dashed grey' }}>
      This Box renders as an HTML section element.
       </Box> */}





    </>
  )
}

export default App
