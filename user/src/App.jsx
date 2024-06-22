import React from 'react'
import {  createBrowserRouter, Route, Router, RouterProvider, Routes } from 'react-router-dom'
import { routes } from './routes/routes'
import Navbar from './components/layouts/Navbar'
import Footer from './components/layouts/Footer'




const App = () => {
  return (
    <div className='flex flex-col min-h-screen'>
      <Navbar />
      <div className='flex flex-grow w-full'>
      <Routes>
        {routes.map(route => 
          <Route key={route.path} path={route.path} element={route.element}  />  
        )}
      </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default App