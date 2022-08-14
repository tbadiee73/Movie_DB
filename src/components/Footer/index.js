import { Footer_ui } from "./styles";
import logo from "../assets/logo.svg";
import twitt from "../assets/twitter.svg";
import tel from "../assets/telegram.svg";
import insta from "../assets/instagram.svg";
import face from "../assets/facebook.svg";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <Footer_ui>
        <footer className="container">
          <p>
            © 2022{" "}
            <Link to={"/"} className="link">
              mOvie_HOME
            </Link>{" "}
            Foundation
          </p>
          <a href="https://developers.themoviedb.org/3"><img src={logo} alt="" width="140px" /></a>
          <div className="logo">
            <img src={tel} alt="" />
            <img src={face} alt="" />
            <img src={insta} alt="" />
            <img src={twitt} alt="" />
          </div>
        </footer>
      </Footer_ui>
    </>
  );
}
