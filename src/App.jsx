import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Address from "./components/Address";
import Footer from "./components/Footer";
import Jsx from "./components/Jsx";
import About from "./components/About";
import Country from "./components/Country";
import Js from "./components/Js";
import LoginModal from "./components/LoginModal";
import Details from "./components/Details";

const App = () => {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      <Navbar setShowLogin={setShowLogin} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/address" element={<Address />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/jsx" element={<Jsx />} />
        <Route path="/about" element={<About />} />
        <Route path="/country" element={<Country />} />
        <Route path="/Js" element={<Js />} />
        <Route path="/details/:id" element={<Details/>}/>
      </Routes>
      {showLogin && <LoginModal setShowLogin={setShowLogin} />}
    </>
  );
};

export default App;
