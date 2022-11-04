import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Services from "./components/Services";
import Previous from "./components/Previous";
import Contact from "./components/Contact";
import NotFoundPage from "./components/NotFound";



const App = () => {
  useEffect(() => {
    document.title = "Sentimetal"
  }, [])
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/services" element={<Services/>} />
        <Route path="/previous-work" element={<Previous/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="*" element={<NotFoundPage/>}/>

        {/* Home, Contact, Previous works, order metal tiles, Products page */}
      </Routes>
    
    
    </BrowserRouter>

  );
}

export default App;
