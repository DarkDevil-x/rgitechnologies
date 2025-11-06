// pages/Home.tsx
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Contact from './Contact';
import Stats from './Stats';
import Testimonials from './Testimonials';
import Clients from './Clients';
import Work from './Work';
import Services from './Services';
import About from './About';
import Hero from './Hero';

const Home = () => {
  return (
    <>
     
      <main>
        <Hero />
        <About/>
        <Services />
        <Work />
        <Clients />
        <Testimonials />
        <Stats />
        <Contact />
      </main>
    </>
  );
};

export default Home;