import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";

import Home from "./components/Home";
import Welding from "./components/Welding";
import Previous from "./components/Previous";
import Contact from "./components/Contact";
import NotFoundPage from "./components/NotFound";
import Services from "./components/Services";
import Fabrication from "./components/Fabrication";
import Panelling from "./components/MetalPaneling";
import { ThemeProvider } from "styled-components";
import background from "./images/blackTexture.jpg";


const App = () => {
  const theme = {
    backgroundImage: background,
    mainColor: "#e9e0c9",
    accentColor: "#D4AF37"
  }
  useEffect(() => {
    document.title = "Sentimetal"
  }, [])
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/services" element={<Services/>} />
          <Route path="/services-welding" element={<Welding/>} />
          <Route path="/services-fabrication" element={<Fabrication/>} />
          <Route path="/services-metal-panelling" element={<Panelling/>} />
          <Route path="/previous-work" element={<Previous/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="*" element={<NotFoundPage/>}/>

          {/* Home, Contact, Previous works, order metal tiles, Products page */}
        </Routes>
      </BrowserRouter>

    </ThemeProvider>


  );
}

export default App;
