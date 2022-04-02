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
            <Link to={"/about"}>Sobre o app</Link>
          </li>
          <li>
            <a
              href="https://www.tvmaze.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              TVMaze
            </a>
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
