import { Movie_name, Pic_flex, Image } from "./styles";
import { Link } from "react-router-dom";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default function Movie(props) {
  return (
    <>
      <div className="container flex">
        {props.list.map((item) => {
          let img_url = "https:///www.themoviedb.org/t/p/w220_and_h330_face/";
          let img_popular_movie = `${img_url}${item.poster_path}`;
          return (
            <Pic_flex key={item.id}>
              
              <CircularProgressbar
                className="circular"
                value={item.vote_average * 10}
                text={item.vote_average * 10 + "%"}
              />

              <Link to={"/Details"}>
                <Image src={img_popular_movie}></Image>
                <Movie_name>{item.title || item.name}</Movie_name>
              </Link>
            </Pic_flex>
          );
        })}
      </div>
    </>
  );
}
