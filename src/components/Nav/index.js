import { Nav, Navdetails, Navleft } from "./styles";
import img from "../assets/navlogo.svg";
import tv from "../assets/tv.svg";
import film from "../assets/film.svg";
import * as React from "react";

import { Link } from "react-router-dom";

export default function Navbar() {

  return (
    <>
      <Nav>
        <Navdetails className="container">
          <Navleft>
            <Link to="/">
              <img src={img} alt="" width="140px" />
            </Link>
            <span><Link to={'/Movies'}>Movies</Link></span>
            <span>TV Shows</span>
            <span>Pepole</span>
          </Navleft>
        </Navdetails>
      </Nav>
    </>
  );
}
