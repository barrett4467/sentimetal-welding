import React, { useLayoutEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";

import Home from "./components/Home";
import About from "./components/About";
import Welding from "./components/Welding";
import Previous from "./components/Previous";
import Contact from "./components/Contact";
import NotFoundPage from "./components/NotFound";
import Services from "./components/Services";
import Fabrication from "./components/Fabrication";
import Panelling from "./components/MetalPaneling";
import { ThemeProvider } from "styled-components";
import background from "./images/blackTexture.jpg";

import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
body {
    margin: 0 auto;
    padding: 0;
    max-width: 100%;
    box-sizing: border-box;
    background-image: url(${props => props.theme.backgroundImage});
    background-size: cover;
    letter-spacing: 1px;
    color: ${props => props.theme.mainColor};
}
h1, h2, h3, h4{
    color: ${props => props.theme.accentColor};
    text-transform: uppercase;
}
`
const App = () => {
  const theme = {
    backgroundImage: background,
    mainColor: "#e9e0c9",
    accentColor: "#D4AF37"
  }
  useLayoutEffect(() => {
    document.title = "Sentimetal"
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About />}/>
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
