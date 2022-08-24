import {Frame, Image } from "./styles";
import { Link } from "react-router-dom";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default function Movie(props) {
  return (

   <div className="padding container ">
    <div className="flex scroll ">
        {props.list.map((item) => {
          let img_url = "https:///www.themoviedb.org/t/p/w220_and_h330_face/";
          let img_popular_movie = `${img_url}${item.poster_path}`;
          return (
            <Frame key={item.id}>
              
              <CircularProgressbar className="circle"  value={Math.round(item.vote_average * 10)}
            text={`${Math.round(item.vote_average * 10)}%`}
              />

              <Link to={`/movie/${item.id}`}>
                <Image src={img_popular_movie}></Image>
                <div>{item.title || item.name}</div>
              </Link>
            </Frame>
          );
        })}
      </div>
      </div>

  );
}
