import { Link } from "react-router-dom";
import { Container, Box } from "../MoviePage/style";
import woman from "../assets/woman.svg"
import man from "../assets/man.svg"

export default function PeopleBox(props) {
  return (
    <div className="container">
       <h1>Popular People</h1>
      <Container>
        {props.list.map((item) => {
          
          let image = `https://image.tmdb.org/t/p/w220_and_h330_face/${item.profile_path}`;
          let womanImage =`${woman}`;
          let manImage =`${man}`;
          let gender =`${item.gender}` == 1 ? `${womanImage}`: `${manImage}`;
          let poster =`${item.profile_path}` !== "null"? `${image}`: `${gender}`; 
          return (
          
            <Box key={item.id}>
            <Link to={`/person/${item.id}`}>
        
            <div className="image"> <img src={poster} alt="" /></div>

                <div className="name">{item.name}</div>
                </Link>
            </Box>
           
          );
        })}
      </Container>
    </div>
  );
}
