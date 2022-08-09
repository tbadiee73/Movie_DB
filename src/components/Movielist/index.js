import { useState, useEffect } from "react";
import { Container, Title } from "../MainSection/styles";
import Movie from "../MainSection";
import Movies_Box from "../MoviePage";
import {
  get_popular_movie,
  get_popular_tv,
  get_Playing_movie,
  get_Upcoming_movie,
  get_Toprated_movie,
} from "../../helpers/server";
import PaginationOutlined from "../Pagination";


function getdata_by_tab(id,page) {
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

function HomePage_swich_button(props) {

  

  let [swich, setswich] = useState("movie");

  let [data, setdata] = useState([]);

  useEffect(() => {
    getdata_by_tab(swich).then((response) => {
      setdata(response);
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
      <Movie list={data} />
    </>
  );
}

function Movie_swich_button(props) {

  let [page, setpage]=useState(1);

  let [swich, setswich] = useState("movie");

  let [data, setdata] = useState([]);


  useEffect(() => {
    
    getdata_by_tab(swich,page).then((response) => {
      setdata(response);
     
    });
  }, [swich,page]);

  return (
    <>
      <Container className="container">
        <h2>Movie</h2>
        <Title>
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
      <Movies_Box list={data} />
      
      <PaginationOutlined setPage={(number) =>{

       setpage(number)
      }} pageNumber={20}  currentpage={page} />
    </>
  );
}

export { HomePage_swich_button, Movie_swich_button };
