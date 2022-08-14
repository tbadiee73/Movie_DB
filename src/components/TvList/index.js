import { useState, useEffect } from "react";
import { Container, Title } from "../MainSection/styles";
import MoviesBox from "../MoviePage";
import {
  get_popular_tv,
  get_airing_tv,
  get_on_tv,
  get_topRated_tv,
} from "../../helpers/server";
import PaginationOutlined from "../Pagination";


function getdata_by_tab(id,page) {
    if (id === "tv") {
      return get_popular_tv(page);
    } else if (id === "now Playing") {
      return get_airing_tv(page);
    } else if (id === "upcoming") {
      return get_on_tv(page);
    } else if (id === "top Rated") {
      return get_topRated_tv(page);
    }
  }
  
export default function TV_swich_button(props) {

  let [page, setpage]=useState(1);

  let [swich, setswich] = useState("tv");

  let [data, setdata] = useState([]);


  useEffect(() => {
    
    getdata_by_tab(swich,page).then((response) => {
      setdata(response);
     
    });
  }, [swich,page]);

  return (
    <>
      <Container className="container">
        <h2 style={{letterSpacing:"4px" }}>TV SHOWS</h2>
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
      <MoviesBox list={data} />
      
      <PaginationOutlined setPage={(number) =>{

       setpage(number)
      }}  currentpage={page} />
    </>
  );
}

