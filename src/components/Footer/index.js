import { Footer_ui } from "./styles";
import logo from "../assets/biglogo.svg";
export default function Footer() {
  return (
    <>
      <Footer_ui>
        <footer className="container">
          <img src={logo} alt="" width="140px" />

          <div className="footer_column">
            <h3>THE BASICS</h3>
            <a href="#">About TMDB</a>
            <a href="#">Contact Us</a>
            <a href="#">Support Forums</a>
            <a href="#">API</a>
            <a href="#">System Status</a>
          </div>
          <div className="footer_column">
            <h3>GET INVOLVED</h3>
            <a href="#">Contribution Bible</a>
            <a href="#">Add New Movie</a>
            <a href="#">Add New TV Show</a>
            
          </div>
        </footer>
      </Footer_ui>
    </>
  );
}
