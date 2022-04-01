import React from "react";
import { Link } from "react-router-dom";
import { BsDisplay } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { ShowNavbar, MobileIcon } from "../styles/Styled";

const Navbar = () => {
  return (
    <ShowNavbar>
      <nav>
        <Link to={"/"} title="Binge Tv | Home">
          <BsDisplay />
          BingeTv
        </Link>

        <ul>
          <li>
            <Link to={"/search"}>Pesquisar</Link>
          </li>
          <li>
            <Link to={"/about"}>Sobre o app</Link>
          </li>
        </ul>
        <MobileIcon>
          <GiHamburgerMenu />
        </MobileIcon>
      </nav>
    </ShowNavbar>
  );
};

export default Navbar;
