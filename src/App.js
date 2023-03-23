import React, { useEffect } from "react";
import { useState } from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import Header from "./components/Header";

function App() {

  const [mode , setMode] = useState("light")

  function handleClick(){

    if(mode === "light"){
      setMode("dark")
      document.body.classList.add("dark")
    }

    else{
      setMode("light") 
      document.body.classList.remove("dark")
    }
    
  }
  return (
    <>
      <Navbar mode = {mode} toggleMode = {handleClick} />
      <Header mode = {mode} />
    </>
  );
}

export default App;

// https://api.unsplash.com/search/photos?page=1&query=mango&client_id=As379ueQ6DMePuTIJmWmgnWFJGpLnuJPSLknY4yUL1E
