import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Admission from "./Pages/Admission";
import Media from "./Pages/Media";
import Student from "./Pages/Student";
import Alumini from "./Pages/Alumini";
import About from "./Pages/About";
import Home from "./Pages/Home";
import Herosection from "./Components/Herosection";
import Coursesection from "./Components/Coursesection";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/admission" element={<Admission />} />
        <Route path="/media" element={<Media />} />
        <Route path="/students" element={<Student />} />
        <Route path="/alumini" element={<Alumini />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Herosection />
      <Coursesection />
    </div>
  );
};

export default App;
