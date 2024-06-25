import React from 'react'
import Navigation from '../Components/Navigation'
import Client from '../Components/Client'
import About from '../Components/About'
import Blog from '../Components/Blog'
import { Outlet } from 'react-router-dom'
import Footer from '../Components/Footer'

function RootLayout() {
  return (
   <>
   <Navigation />
   <main className='min-h-80'>
        <Outlet/>
    </main>
    <Client/>
    <About/>
    <Blog/>

    <footer className='h-16  text-black'>
       <Footer/>
    </footer>
   
   </>
  )
}

export default RootLayout
