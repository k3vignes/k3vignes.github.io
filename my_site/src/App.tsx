import React from 'react';
import './App.scss';
import { MyNavbar } from "./components/NavBar/NavBar";
import Image from 'react-bootstrap/Image'
import logo from "./assets/images/logo.svg";
import { Parallax } from "./components/Parallax/Parallax";
import { Home } from "./components/Home/Home";
import { AboutMe } from "./components/AboutMe/AboutMe";
import { Contact } from "./components/Contact/Contact";
import { Footer } from "./components/Footer/Footer"; 


export const App: React.FC = () => {
  return (
    <div className={"page"}>
      <Parallax cssClass={"headerParallax"} headerText={"Kajan Vigneswaran - Software Engineer"} />
      <MyNavbar />
      <Home />
      <AboutMe />
      <Contact />
      <Footer />
    </div>
  );
};
