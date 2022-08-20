import { Container} from "./style";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { Link } from "react-router-dom";
import noimage from "../assets/noimage.svg";

export default function MovieDetail(props) {
  let img_poster = `http://image.tmdb.org/t/p/w342${props.item.poster_path}`;

  let no_image = `${noimage}`;
  let poster_path =
    `${props.item.poster_path}` !== "null" ? `${img_poster}` : `${no_image}`;
  console.log(props.item);
  return (
    <div className="container">
      <Container className="flex " key={props.item.id}>
        <img className="poster_ui" src={poster_path} alt="" />
        <div className="movie_info">
          <h1>{props.item.title || props.item.name}</h1>
        <i>{props.item.release_date || props.item.first_air_date}</i>

          <div>
            {props.item.genres.map((item) => {
              return (
                <Link to={`/genres/${props.type}/${item.name}/${item.id}`}>
                  <b><i  className="genrelink">•{item.name}</i></b>
                </Link>
              );
            })}
          </div>
          

          <span className="user_score">
            <CircularProgressbar
              className="circle"
              value={props.item.vote_average * 10}
              text={props.item.vote_average * 10 + "%"}
            />{" "}
            <h4>
              User <br /> Score
            </h4>
          </span>
          
          <i className="tagline">"{props.item.tagline}"</i>
          <div>
            <h2>
              <i>overview</i>
            </h2>
            <i>{props.item.overview}</i>
          </div>
        </div>
      </Container>
    </div>
  );
}
