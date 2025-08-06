import React from "react";
import Navbar from "./Component/Navbar";
import Home from "./Pages/Home"
import Footer from "./Component/Footer"
import { Routes, Route } from "react-router-dom";
import SignIn from "./Pages/signIn";
import Signup from "./Pages/Signup";
import Pricing from "./Pages/Pricing";


export const backendUrl = import.meta.env.VITE_BACKEND_URL;
const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/pricing" element={<Pricing/>}/>
      </Routes>
      <Footer/>
    </>
  );
};

export default App;
