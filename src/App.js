import React from "react";
import Home from './router/Home';
import About from './router/about';
import Contact from './router/Contact';
import Project from './router/project';
import './App.css';
import { Route, Routes } from 'react-router-dom';
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/project" element={<Project />} />
      </Routes>
    </>
  );
}

export default App;
