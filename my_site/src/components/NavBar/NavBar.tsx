import {
  Nav, Navbar,
  NavItem,
  NavLink,
} from "react-bootstrap";
import "./NavBar.scss";
import { Link, animateScroll as scroll } from "react-scroll";
import React, {useEffect, useState} from 'react';

type IState = {
    navbarClass: "fixed-header" | "absolute-header",
    displayPlaceholder: boolean,
}

export const MyNavbar: React.FC = () => {
  const [navbarState, setNavbarState] = React.useState<IState>({
    navbarClass: "absolute-header",
    displayPlaceholder: false,
  });

  useEffect(() => {
    const updateNavbarClass = () => {
      if (
        document.documentElement.scrollTop > 700 ||
        document.body.scrollTop > 700
      ) {
        setNavbarState({navbarClass: "fixed-header", displayPlaceholder: true});
        console.log("fixed");
        console.log(document.documentElement.scrollTop);
      } else if (
        document.documentElement.scrollTop < 699 ||
        document.body.scrollTop < 699
      ) {
        setNavbarState({navbarClass: "absolute-header", displayPlaceholder: false});
        console.log("absolute")
        console.log(document.documentElement.scrollTop);
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
    <>
        <div className={navbarState.navbarClass}>
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
        {navbarState.displayPlaceholder && (
          <div className={"placeHolder"}></div>
        )}
    </>
  );
};
