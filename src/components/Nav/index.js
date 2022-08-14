import { Nav, Navdetails, Navleft } from "./styles";
import GroupWorkIcon from "@mui/icons-material/GroupWork";
import { green } from "@mui/material/colors";
import tv from "../assets/tv.svg";
import film from "../assets/film.svg";
import pepole from "../assets/theater-masks.svg";
import * as React from "react";

import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <Nav>
        <Navdetails className="container">
          <Navleft>
            <Link to="/">
              <span>
                <GroupWorkIcon fontSize="large" sx={{ color: green["A200"] }} />
               mOvie_HOME
              </span>
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
        </Navdetails>
      </Nav>
    </>
  );
}
