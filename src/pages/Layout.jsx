import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <main>
        <Navbar/>
        <main className='container mx-auto p-5 flex items-center justify-center relative top-[50px]'>
          <Outlet/>
        </main>
    </main>
  )
}

export default Layout