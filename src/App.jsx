import React from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import RootLayout from './Component/RootLayout';

let router = createBrowserRouter(createRoutesFromElements(
  <Route element={<RootLayout/>}>
<Route path="/" element={<Home/>}> </Route>
<Route path="/about" element={<About/>}> </Route>

  </Route>
));

function App() {
  return (
<>
    <RouterProvider router={router} > </RouterProvider>
   
   
    </>
  )
}

export default App