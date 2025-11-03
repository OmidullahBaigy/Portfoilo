import React from "react";
import './App.css'
import Header from "./pages/Header";
import Navbar from "./pages/Navbar";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  return (
      <div>
        <Navbar />
        <Header />
        <About />
        <Projects />
        <Contact />       
      </div>
  );
}

export default App;
