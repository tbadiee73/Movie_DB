import { Container} from "./style";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";


export default function MovieDetail(props) {
  let img_poster = `http://image.tmdb.org/t/p/w342${props.list.poster_path}`;
  let back_poster = `http://image.tmdb.org/t/p/original${props.list.backdrop_path}`;
  return (
    <>
      <Container >
        <div className="container flex "
       /* style={{   backgroundImage: `url(${back_poster})`,
        backgroundSize: "cover"}}*/>
          <img className="poster_ui" src={img_poster} alt=""/>
          <div className="movie_info">
            <h1>
              {props.list.title}
            </h1>
            <div>{props.list.release_date}</div>
            
            
            <span className="user_score"><CircularProgressbar className="circle" value={props.list.vote_average * 10} text={props.list.vote_average * 10 + "%"}/> <h3>User <br/> Score</h3></span>
            <i className="tagline">{props.list.tagline}</i>
            <div>
              <h3>overview</h3>
              <p>{props.list.overview}</p>

            </div>
          </div>
        </div>
      </Container>    
    </>
  );
}
