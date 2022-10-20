import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import Footer from './components/Footer';
import Navbar from './components/Navbar/Navbar';
import ScrollToTop from './components/ScrollToTop';
import About from './screens/About';
import Contact from './screens/Contact';
import Home from './screens/Home';
import Projects from './screens/Projects';

import { motion } from "framer-motion";
import NotFound from './screens/NotFound';
import MobileNavbar from './components/MobileNavbar/MobileNavbar';
import { useEffect, useState } from 'react';
import astr from "./images/astronaut-in-tea-break.gif"

function App() {
  const [load, setLoad] = useState(true)

  useEffect(() => {
   setTimeout(() => {
     setLoad(false)
   }, 3000);
  }, [])
  

  return (

    <>

    {
       load && (
        <div className="loading-screen">
        <img src={astr} alt="" />
        <h2>Thank you </h2>
      </div> 
       )
    }
     
    {
      !load && (
    <BrowserRouter>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route exact path="/home" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes> 


      <Footer />
      <MobileNavbar/>
    </BrowserRouter>

      )
    }
    </>
  );
}

export default App;
