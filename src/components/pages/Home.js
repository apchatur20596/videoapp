import React from 'react';
import '../../App.css';
import Cards from '../js/Cards';
import Footer from '../js/Footer';
import HeroSection from '../js/HeroSection';

function Home() {
  return (
    <>
      <HeroSection />
      <Cards />
      <Footer />
    </>
  );
}

export default Home;