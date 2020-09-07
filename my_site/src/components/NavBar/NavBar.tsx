import {
  Nav, Navbar,
  NavItem,
  NavLink,
} from "react-bootstrap";
import "./NavBar.scss";
import { Link, animateScroll as scroll } from "react-scroll";
import React, {useEffect, useState} from 'react';


export const MyNavbar: React.FC = () => {
  const [navbarClass, setNavbarClass] = React.useState<"fixed-header" | "absolute-header">("absolute-header");

  useEffect(() => {
    const updateNavbarClass = () => {
      if (
        document.documentElement.scrollTop > 699 ||
        document.body.scrollTop > 699
      ) {
        setNavbarClass("fixed-header");
      } else if (
        document.documentElement.scrollTop < 700 ||
        document.body.scrollTop < 700
      ) {
        setNavbarClass("absolute-header");
      }
    };
    window.addEventListener("scroll", updateNavbarClass);
    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarClass);
    };
  });

  return (
    /*<Navbar className={navbarClass} expand="lg" color="dark">
      <Container>
        <div className="">
          <Link
            to=""
            className=""
            smooth={true}
            duration={1000}
          >
            Tunes
          </Link>
        </div>
      </Container>
    </Navbar>*/
    <div className={navbarClass}>
      <Navbar bg={"dark"} variant={"dark"}>
        <Nav>
          <NavItem>
            <NavLink>About Me</NavLink>
          </NavItem>
          <NavItem>
            <NavLink>Resume</NavLink>
          </NavItem>
          <NavItem>
            <NavLink>Portfolio</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href={""}>GitHub</NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    </div>
  );
};
