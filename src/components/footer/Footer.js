import React, {useContext} from "react";
import "./Footer.scss";
import {Fade} from "react-reveal";
import emoji from "react-easy-emoji";
import StyleContext from "../../contexts/StyleContext";
import Emoji from "react-emoji-render";

export default function Footer() {
  const {isDark} = useContext(StyleContext);
  return (
    <Fade bottom duration={1000} distance="5px">
      <div className="footer-div">
        <p className={isDark ? "dark-mode footer-text" : "footer-text"}>
          {" "}
          {<Emoji text="Made with ❤️ by Muhammad Ismail" />}{" "}
        </p>{" "}
        {/* <p className={isDark ? "dark-mode footer-text" : "footer-text"}>
          Theme by{" "}
          <a href="https://github.com/Muhammad0302/M-Ismail-portfolio">
            IsmailPortfolio{" "}
          </a>{" "}
        </p>{" "} */}
      </div>{" "}
    </Fade>
  );
}
