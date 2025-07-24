import React from 'react'
import Manu from './Manu'
import Fotter from './fotter';
import { Outlet } from 'react-router-dom';

const RootLayout = () => {
  return (
    <>
    <Manu/>
    <Outlet/>
    <Fotter/>
    </>
  )
}

export default RootLayout