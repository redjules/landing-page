import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/NavBar";
import HeroSection from "./components/HeroSection";

function App() {
  return (
    <>
      <Navbar />
      <div className="container mx-auto">
        <HeroSection />
      </div>
    </>
  );
}

export default App;
