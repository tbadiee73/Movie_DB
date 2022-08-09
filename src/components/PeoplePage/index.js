import { Link } from "react-router-dom";
import { Container, Box } from "../MoviePage/style";

export default function People_Box(props) {
  return (
    <div className="container">
       <h1>Popular People</h1>
      <Container>
        {props.list.map((item) => {
          let img_people = `https://image.tmdb.org/t/p/w220_and_h330_face/${item.profile_path}`;

          return (
          
            <Box key={item.id}>
            <Link to="#">
            <div className="image"> <img src={img_people} /></div>

                <div className="name">{item.name}</div>
                </Link>
            </Box>
           
          );
        })}
      </Container>
    </div>
  );
}
