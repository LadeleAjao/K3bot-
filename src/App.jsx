import React from "react";
import Navbar from "./Component/Navbar";
import Home from "./Pages/Home"
import Footer from "./Component/Footer"
import { Routes, Route } from "react-router-dom";
import SignIn from "./Pages/signIn";
import Signup from "./Pages/Signup";
import Pricing from "./Pages/Pricing";
import Niche from "./Pages/Niche";
import Corefeautures from "./Pages/Corefeautures";


export const backendUrl = import.meta.env.VITE_BACKEND_URL;
const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/pricing" element={<Pricing/>}/>
        <Route path="/usecase" element={<Niche/>} />
        <Route path="/features" element={<Corefeautures/>} />
      </Routes>
      <Footer/>
    </>
  );
};

export default App;
