import {Container,Section2,Box } from "./style";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import {Link } from "react-router-dom";
import man from "../assets/man.svg";
import woman from "../assets/woman.svg";


export default function MovieDetail(props) {
  let img_poster = `http://image.tmdb.org/t/p/w342${props.list.poster_path}`;
  let back_poster = `http://image.tmdb.org/t/p/original${props.list.backdrop_path}`;
  return (

      <div
          className="container"
          /* style={{   backgroundImage: `url(${back_poster})`,
        backgroundSize: "cover"}}*/
        >
      <Container className="flex ">
      
          <img className="poster_ui" src={img_poster} alt="" />
          <div className="movie_info">
            <h1>{props.list.title}</h1>
            <div>({props.list.release_date})</div>

            <span className="user_score">
              <CircularProgressbar
                className="circle"
                value={props.list.vote_average * 10}
                text={props.list.vote_average * 10 + "%"}
              />{" "}
              <h4>
                User <br /> Score
              </h4>
            </span>
            <i className="tagline">"{props.list.tagline}"</i>

            <div>
              <h2><i>overview</i></h2>
              <i>{props.list.overview}</i>
            </div>


          {/*<h2>{props.genre.map((genre) => {
            if (props.genre.id === props.list.genre_ids){
              console.log(props.list.genre_ids);
              return <a> ({genre.name}) </a>
            }
           })} </h2>*/}
          </div>
        
        </Container>
        
        <Section2 className="column">
        <h2>Cast</h2>
        <div className="flex scroll">
          {props.cast.map((item) => {
        
            let images_people = `https://www.themoviedb.org/t/p/w138_and_h175_face/${item.profile_path}`;
            let woman_img =`${woman}`;
            let man_img =`${man}`;
            let gender_img =`${item.gender}` === 1 ? `${woman_img}`: `${man_img}`;
            let poster =`${item.profile_path}` !== "null"? `${images_people}`: `${gender_img}`; 
            return (
              <Box key={item.id}>
                <Link to={`/person/${item.id}`}>
                <img alt=""
                    src={poster } className="image"/>
                  <div className="name" >{item.name}<br/><i>{item.character}</i></div>
            
                </Link>
              </Box>
            );
          })}
          </div>
        </Section2>
        </div>
    
  );
}
