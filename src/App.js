import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";

import Home from "./components/Home";
import Welding from "./components/Welding";
import Previous from "./components/Previous";
import Contact from "./components/Contact";
import NotFoundPage from "./components/NotFound";
import Fabrication from "./components/Fabrication";
import Panelling from "./components/MetalPaneling";




const App = () => {
  useEffect(() => {
    document.title = "Sentimetal"
  }, [])
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/services-welding" element={<Welding/>} />
        <Route path="/services-fabrication" element={<Fabrication/>} />
        <Route path="/services-metal-panelling" element={<Panelling/>} />
        <Route path="/previous-work" element={<Previous/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="*" element={<NotFoundPage/>}/>

        {/* Home, Contact, Previous works, order metal tiles, Products page */}
      </Routes>
    
    
    </BrowserRouter>

  );
}

export default App;
