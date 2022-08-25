import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { get_Search } from "../../helpers/server";


export default function Search() {
  let [input, setinput] = useState("");
  let [data, setdata] = useState([]);
  let [loading, setLoading] = useState(true);
  let [error, setError] = useState(false);

  let handelchange = (e) => {
    setinput(e.target.value);
  };

  //let navigate = useNavigate();

  let handlesubmit = (e) => {
    e.preventDefault();
    setinput(e.target.value);
   // navigate(`#`);
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
    <>
      <div className="background">
        <div className="container">
          <h2>wellcome.</h2>
          <br />
          <h5> Get the shows, movies and people you love.</h5>

          <form onSubmit={handlesubmit}></form>
          <input
            className="searchinput"
            type={"text"}
            id="search"
            placeholder="Search for..."
            value={input}
            onChange={handelchange}
          />
          <Link to="#">
            <svg
              style={{ position: " relative", top: " 14px", right: "60px" }}
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="none"
              stroke="var( --secondary-light)"
              stroke-width="2.5"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="feather feather-search"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </Link>
          <br />
          <div >
            {data.slice(0, 5).map((item) => {
              if (item.media_type === "person") {
                return (
                  <div>
                    <Link to={`/person/${item.id}`} key={item.id}>
                      {item.name}
                    </Link>
                  </div>
                );
              } else if (item.media_type === "movie") {
                return (
                  <div>
                    <Link
                      to={`/movie/${item.id}`}
                      key={item.id}
                    >
                      {item.title}
                    </Link>
                  </div>
                );
              } else if (item.media_type === "tv") {
                return (
                  <div>
                    <Link to={`/tv/${item.id}`} key={item.id}>
                      {item.name}
                    </Link>
                  </div>
                );
              }
            })}
          </div>
        </div>
      </div>
    </>
  );
}
