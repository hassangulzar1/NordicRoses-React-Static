import React from "react";
import "./App.css";
import Navbar from "./Pages/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Jin from "./Pages/Jin/Jin";
import Tag from "./Pages/Tag/Tag";
import Eye from "./Pages/eye Divider/Eye";
import WhatNext from "./Pages/What Next Cards/WhatNext";
import SignUp from "./Pages/Signup/SignUp";
import Footer from "./Pages/Footer/Footer";
function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Jin />
      <Tag />
      <Eye />
      <WhatNext />
      <SignUp />
      <Footer />
    </>
  );
}

export default App;
