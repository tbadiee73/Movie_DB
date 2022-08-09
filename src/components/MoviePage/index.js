import { Link } from "react-router-dom";
import { Container, Box} from "./style";


function Movies_Box(props) {
  return (
    <div className="container">
      <Container>
        {props.list.map((item) => {
          let img_url ="https://www.themoviedb.org/t/p/w220_and_h330_face/";
          let img_popular_movie = `${img_url}${item.poster_path}`;
          return (
            <Box  key={item.id}>
                <Link to={`/movie/${item.id}`}>
                <div className="image"><img src={img_popular_movie} /></div>
                <div className="name">{item.name||item.title}</div>
              </Link>
            </Box>
          );
        })}
       
      </Container>
    </div>
  );
}

export default Movies_Box;
