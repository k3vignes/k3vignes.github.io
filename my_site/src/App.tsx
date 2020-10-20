import React from 'react';
import './App.scss';
import { MyNavbar } from "./components/NavBar/NavBar";
import Image from 'react-bootstrap/Image'
import logo from "./assets/images/logo.svg";
import { Parallax } from "./components/Parallax/Parallax";
import { Home } from "./components/Home/Home";
import { AboutMe } from "./components/AboutMe/AboutMe";
import { Contact } from "./components/Contact/Contact";

export const App: React.FC = () => {
  return (
    <div>
      <Parallax cssClass={"headerParallax"} headerText={"Kajan Vigneswaran - Software Engineer"} />
      <MyNavbar />
      <Home />
      <AboutMe />
      <Contact />
    </div>
  );
};
