import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Buttons from "./Components/Buttons/Buttons";
import Home from "./Views/Home/Home";
import About from "./Views/About/About";
import Work from "./Views/Work/Work";
import Contact from "./Views/Contact/Contact";

function App() {

  return (
    <main className="container py-3 p-0">
        <Navbar/>
      <BrowserRouter>
        <Buttons/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/work" element={<Work />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
