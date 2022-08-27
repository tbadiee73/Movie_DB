import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { get_Search } from "../../helpers/server";
import { SearchInput } from "./styles";
import search2 from "../assets/search2.svg";
import film from "../assets/film.svg";
import tv from "../assets/tv.svg";
import person from "../assets/man.svg";

export default function MultiSearch() {
  let [input, setinput] = useState("");
  let [data, setdata] = useState([]);
  let [loading, setLoading] = useState(true);
  let [error, setError] = useState(false);

  let handelchange = (e) => {
    setinput(e.target.value);
  };

  useEffect(() => {
    setLoading(true);
    if (input !== "") {
      get_Search(input)
        .then((response) => {
          setdata(response.results);
        })
        .catch((e) => {
          setError(true);
        })
        .finally(() => {
          setLoading(false);
        });
    } else {
      setdata([]);
    }
  }, [input]);
  return (
    <SearchInput>
      <Link to="#">
        <img
          src={search2}
          style={{ paddingRight: "10px", position: "relative", top: "7px" }}
        />
        <input
          className="navinput"
          type={"text"}
          placeholder="Search..."
          value={input}
          onChange={handelchange}
        />
      </Link>
      <div  className="searchMenu" >
        {data.slice(0, 6).map((item) => {
          if (item.media_type === "person") {
            return (
              <Link
                to={`/person/${item.id}`}
                key={item.id}
                className="menuOption"
              >
                <img src={person} alt="" style={{ width: "20px"}} />
                {item.name}
              </Link>
            );
          } else if (item.media_type === "movie") {
            return (
              <Link
                to={`/movie/${item.id}`}
                key={item.id}
                className="menuOption"
              >
                <img src={film} alt="" style={{ width: "20px" }} />

                {item.title}
              </Link>
            );
          } else if (item.media_type === "tv") {
            return (
              <Link to={`/tv/${item.id}`} key={item.id} className="menuOption">
                <img src={tv} alt="" style={{ width: "20px" }} />
                {item.name}
              </Link>
            );
          }
        })}
      </div>
    </SearchInput>
  );
}
