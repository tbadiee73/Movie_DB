import { Nav, Navdetails, Navleft } from "./styles";
import tv from "../assets/tv.svg";
import film from "../assets/film.svg";
import pepole from "../assets/theater-masks.svg";
import mainlogo from "../assets/movie-logo.svg";
import * as React from "react";
import { Link } from "react-router-dom";
import MultiSearch from "./search";

export default function Navbar() {
  return (
    <>
      <Nav>
        <Navdetails className="container">
          <Navleft>
            <Link to="/" className="logo">
              <img src={mainlogo} alt="" style={{ height: "70px" }} />
            </Link>
            <Link to={"/Movies"} className="nav_item">
              <img src={film} alt="" />
              Movies{" "}
            </Link>
            <Link to={"/TvShow"} className="nav_item">
              <img src={tv} alt="" />
              TV Shows{" "}
            </Link>
            <Link to={"/People"} className="nav_item">
              <img src={pepole} alt="" />
              Pepole{" "}
            </Link>
          </Navleft>
          <MultiSearch />
        </Navdetails>
       
      </Nav>
    </>
  );
}
