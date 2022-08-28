import { useState, useEffect } from "react";
import { Container, Title } from "../MainSection/styles";
import Movie from "../MainSection";
import MoviesBox from "../MoviePage";
import {
  get_popular_movie,
  get_popular_tv,
  get_Playing_movie,
  get_Upcoming_movie,
  get_Toprated_movie,
} from "../../helpers/server";
import PaginationOutlined from "../Pagination";

function getdata_by_tab(id, page) {
  if (id === "movie") {
    return get_popular_movie(page);
  } else if (id === "tv") {
    return get_popular_tv(page);
  } else if (id === "now Playing") {
    return get_Playing_movie(page);
  } else if (id === "upcoming") {
    return get_Upcoming_movie(page);
  } else if (id === "top Rated") {
    return get_Toprated_movie(page);
  }
}

function HomePageSwichButton(props) {
  let [swich, setswich] = useState("movie");
  let [data, setdata] = useState([]);
  let [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getdata_by_tab(swich).then((response) => {
      setdata(response);
      setLoading(false);
    });
  }, [swich]);

  return (
    <>
      <Container className="container">
        <h2>What's Popular</h2>
        <Title>
          {props.tabs.map((tab) => {
            return (
              <a
                className="select"
                href="#mh"
                autoFocus
                onClick={() => {
                  setswich(tab.id);
                }}
              >
                {tab.name}
              </a>
            );
          })}
        </Title>
      </Container>
      {!loading && <Movie list={data} />}
    </>
  );
}

function MovieSwichButton(props) {
  let [page, setpage] = useState(1);
  let [swich, setswich] = useState("movie");
  let [data, setdata] = useState([]);
  let [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getdata_by_tab(swich, page).then((response) => {
      setdata(response);
      setLoading(false);
    });
  }, [swich, page]);

  return (
    <>
      <Container className="container">
        <h2 style={{ letterSpacing: "4px" }}>MOVIES</h2>
        <Title key={props.id}>
          {props.tabs.map((tab) => {
            return (
              <a 
                href="#"
                autoFocus
                onClick={() => {
                  setswich(tab.id);
                  setpage(1);
                }}
              >
                {tab.name}
              </a>
            );
          })}
        </Title>
      </Container>
      {!loading && <MoviesBox list={data} type={"movie"} />}

      <PaginationOutlined
        setPage={(number) => {
          setpage(number);
        }}
        currentpage={page}
      />
    </>
  );
}

export { HomePageSwichButton, MovieSwichButton};
