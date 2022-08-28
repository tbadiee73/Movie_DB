import woman from "../assets/woman.svg"
import man from "../assets/man.svg"
import noimage from "../assets/noimage.svg";
import { Container, Box } from "../MoviePage/style";
import { Link} from "react-router-dom";

export default function  ResultPage(props){

    return(
        <>
         <div className="container"  style={{ height: "1550px" }}>
        <Container>
          {props.list.map((item) => {
           let image = `https://image.tmdb.org/t/p/w220_and_h330_face/${item.profile_path||item.poster_path}`;
           let Noimage=`${noimage}`;
           let womanImage =`${woman}`;
           let manImage =`${man}`;
           let gender =`${item.gender}` == 1 ? `${womanImage}`: `${manImage}`;
           let personProfile =`${item.profile_path}` !== "null"? `${image}`: `${gender}`; 
           let posters =`${item.poster_path}` !== "null"? `${image}`: `${Noimage}`
            
            if (item.media_type === "person") {
              return (
                <Box>
                  <Link to={`/person/${item.id}`} key={item.id}>
                    <img src={personProfile} alt="" />
                    <div className="name">{item.name}</div>
                  </Link>
                </Box>
              );
            } else if (item.media_type === "movie") {
              return (
                <Box>
                  <Link to={`/movie/${item.id}`} key={item.id}>
                  <img src={posters} alt="" />
                    <div className="name">{item.title}</div>
                  </Link>
                </Box>
              );
            } else if (item.media_type === "tv") {
              return (
                <Box>
                  <Link to={`/tv/${item.id}`} key={item.id}>
                  <img src={posters} alt="" />
                    <div className="name">{item.name}</div>
                  </Link>
                </Box>
              );
            }
          })}
        </Container>
      </div>
        </>
    )
}