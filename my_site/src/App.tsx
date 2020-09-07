import React from 'react';
import './App.scss';
import { MyNavbar } from "./components/NavBar/NavBar";
import Image from 'react-bootstrap/Image'
import logo from "./assets/images/logo.svg";
import { AboutMe } from "./components/AboutMe/AboutMe";

export const App: React.FC = () => {
  return (
    <div style={{minHeight: "5000px"}}>
        <div style={{position: "relative"}}>
          <div className={"parallax"}>
            <h1 className={"header-font"}>
              [NAME] - Software Engineer
            </h1>
          </div>
          <MyNavbar />
        </div>
        <AboutMe />
    </div>
  );
};
