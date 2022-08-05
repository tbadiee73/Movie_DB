import { Link } from "react-router-dom";
import { Container, Box, Box_img, Box_name } from "./style";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function Movies_Box(props) {
  return (
    <div className="container">
      <Container>
        {props.list.map((item) => {
          let img_url = "https:///www.themoviedb.org/t/p/w220_and_h330_face/";
          let img_popular_movie = `${img_url}${item.poster_path}`;
          return (
            <Box  key={item.id}>
              {/*  <CircularProgressbar
                className="circular"
                value={item.vote_average * 10}
                text={item.vote_average * 10 + "%"}
              />*/}
                <Link to={'/Details'}>
                <Box_img src={img_popular_movie} />
                <Box_name>{item.name||item.title}</Box_name>
              </Link>
            </Box>
          );
        })}
      </Container>
    </div>
  );
}

export default Movies_Box;
