import React from 'react';
import Carousel from '../Components/Carousel';
import HeroSection from '../Components/Hero';
import Services from '../Components/Sevices';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';

export default function Home() {
  return (
    <>
      {/* Carousel */}
      <Navbar/>
      <Carousel />
      <HeroSection/>
      <Services/>
      <Footer />

    </>
  );
}