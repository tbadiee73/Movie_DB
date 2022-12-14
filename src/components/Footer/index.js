import { Footer_ui } from "./styles";
import twitt from "../assets/twitter.svg";
import tel from "../assets/telegram.svg";
import insta from "../assets/instagram.svg";
import face from "../assets/facebook.svg";
import { Link } from "react-router-dom";
import fontlogo from "../assets/movie-logo-font.svg";


export default function Footer() {
  return (
    <>
      <Footer_ui>
        <footer className="container">
          <span>
            © 2022{" "}
            <Link to={"/"} className="link">
            <img src={fontlogo} alt="" style={{width:"100px"}}/>
            </Link>{" "}
            Foundation
          </span>
        
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
