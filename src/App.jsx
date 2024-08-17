import React from 'react';
import Navbar from './components/Navbar';
import Landing from './components/Landing';
import Marquee from './components/Marquee';
import About from './components/About';
import Eye from './components/Eye';
import Featured from './components/Featured';
import Card from './components/Card';
import Footer from './components/Footer';
import LocomotiveScroll from 'locomotive-scroll'
function App() {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <>
      <div className='w-full min-h-screen text-white bg-zinc-900'>
        <Navbar/>
        <Landing/>
        <Marquee/>
        <About/>
        <Eye/>
        <Featured/>
        <Card/>
        <Footer/>
      </div>
    
    </>
  )
}

export default App
