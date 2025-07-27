import React from "react";
import Navbar from "./Component/Navbar";
import Home from "./Pages/Home"
import Footer from "./Component/Footer"
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>
      <Footer/>
    </>
  );
};

export default App;
