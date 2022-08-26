import Navbar from "../components/Nav";
import Footer from "../components/Footer";
import { Container, Box } from "../components/MoviePage/style";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { get_Search } from "../helpers/server";
import { useParams } from "react-router-dom";
import man from "../components/assets/man.svg";
import woman from "../components/assets/woman.svg";
import noimage from "../components/assets/noimage.svg";

export default function Search() {
  let [data, setdata] = useState([]);
  let [loading, setLoading] = useState(true);
  let [error, setError] = useState(false);
  let { searchtext } = useParams();

  let navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    if (searchtext !== "") {
      get_Search(searchtext)
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
  }, [searchtext]);

  return (
    <>
      <Navbar />
      <div className="container">
        <Container>
          {data.map((item) => {
             let img_people = `https://image.tmdb.org/t/p/w220_and_h330_face/${item.profile_path || item.poster_path}`;
             let woman_img = `${woman}`;
             let man_img = `${man}`;
             let gender_img =
               `${item.gender}` == 1 ? `${woman_img}` : `${man_img}`;
             let poster =
               `${item.profile_path || item.poster_path}` !== "null"
               ? `${img_people}`
               : `${gender_img}`;
            if (item.media_type === "person") {
             
              return (
                <Box>
                  <Link to={`/person/${item.id}`} key={item.id}>
                    <img src={poster} alt="" />
                    <div className="name">{item.name}</div>
                  </Link>
                </Box>
              );
            } else if (item.media_type === "movie") {
              return (
                <Box>
                  <Link to={`/movie/${item.id}`} key={item.id}>
                  <img src={poster} alt="" />
                    <div className="name">{item.title}</div>
                  </Link>
                </Box>
              );
            } else if (item.media_type === "tv") {
              return (
                <Box>
                  <Link to={`/tv/${item.id}`} key={item.id}>
                  <img src={poster} alt="" />
                    <div className="name">{item.name}</div>
                  </Link>
                </Box>
              );
            }
          })}
        </Container>
      </div>
      <Footer />
    </>
  );
}
