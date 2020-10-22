import {
  Nav, Navbar,
  NavItem,
  NavLink,
  NavDropdown
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
        document.documentElement.scrollTop > window.innerHeight ||
        document.body.scrollTop > window.innerHeight
      ) {
        setNavbarState({navbarClass: "fixed-header", displayPlaceholder: true});
        console.log("fixed");
        console.log(document.documentElement.scrollTop);
      } else if (
        document.documentElement.scrollTop < window.innerHeight ||
        document.body.scrollTop < window.innerHeight
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
                <NavLink href={"https://ca.linkedin.com/in/kajan-vigneswaran-292287106"} target={"_blank"}>
                  LinkedIn
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href={"https://github.com/k3vignes"} target={"_blank"}>GitHub</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href={"./Resume.pdf"} target={"_blank"}>Resume</NavLink>
              </NavItem>
              <NavDropdown id={"portfolio"} title={"Portfolio"}>
                <NavDropdown.Item href={"https://tunes-dev.appspot.com"} target={"_blank"}>
                  Tunes
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar>
        </div>
        {navbarState.displayPlaceholder && (
          <div className={"placeHolder"}></div>
        )}
    </>
  );
};
