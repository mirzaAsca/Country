import React, { useState, } from "react";
import './App.css';
import { Route, Routes } from "react-router-dom";
import CountryList from "./components/CountryList";
import {Home} from "./components/Home" 

function App() {
  const [showDescription, setShowDescription] = useState(false);
  return (
  <Routes>  
    <Route path="/" element={ <Home/>} />
  </Routes>
  
  
    
    <div className="vremenska">
      <header>
        <div className="title"> <h1>Drzave</h1></div>
      </header>
      <CountryList showDescription={showDescription} setShowDescription={setShowDescription}/>
    </div>
  );
}
export default App; 

