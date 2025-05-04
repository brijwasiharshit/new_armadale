import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import StickyNavbar from "./components/StickyNavbar";
import HotelHeroSection from "./components/HeroSection";
import ServicesSection from "./components/ServiceSection";
import StatsSection from "./components/StatsSection";
import FacilitiesSection from "./components/FacilitiesSection";
import GallerySection from "./components/GallerySection";
import TeamSection from "./components/TeamSection";
import Footer from "./components/Footer";

function App() {
  return (
   
      <div className=""> 
      <StickyNavbar />
      <HotelHeroSection />
      <ServicesSection />
      <StatsSection />
      <FacilitiesSection />
      <GallerySection />
      <TeamSection />
      <Footer />
      </div>
   
  );
}

export default App;
