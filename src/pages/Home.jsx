import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import MediaGallery from '@/components/MediaGallery';
import Navbar from '@/components/Navbar';
import ProgramSection from '@/components/ProgramSection';
import TimeSection from '@/components/TimeSection';
import React from 'react'

const Home = () => {
  return (
    <div className="relative">
      <Navbar />
      
      <section id="home">
        <HeroSection />
      </section>
      
      <section id="program" className=" md:py-16 bg-gray-50">
        <ProgramSection />
      </section>
      
      <section id="schedule" className=" md:py-16">
        <TimeSection />
      </section>
      
      <section id="gallery" className=" md:py-16 bg-gray-50">
        <MediaGallery />
      </section>
      
      <Footer />
    </div>
  )
}

export default Home;