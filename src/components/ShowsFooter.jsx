import React from "react";
import { Footer, FooterCopy, FooterLinks } from "../styles/Styled";
import { FaLinkedin } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";

const FooterShows = () => {
  const todayDate = new Date().getFullYear();

  return (
    <Footer>
      <FooterCopy>
        <small>&copy; {todayDate} | All rights reserved</small>

        <FooterLinks>
          <span>
            <a
              href="https://github.com/gpereira305"
              target="_blank"
              rel="noopener noreferrer"
              title="Ir para Github"
            >
              <AiFillGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/giovane-pereira"
              target="_blank"
              rel="noopener noreferrer"
              title="Ir para  Linkedin"
            >
              <FaLinkedin />
            </a>
          </span>
          <a
            href="https://www.tvmaze.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            www.tvmaze.com
          </a>
        </FooterLinks>
      </FooterCopy>
    </Footer>
  );
};

export default FooterShows;
