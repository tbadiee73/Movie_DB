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
          
          let img_people = `https://image.tmdb.org/t/p/w220_and_h330_face/${item.profile_path}`;
          let woman_img =`${woman}`;
          let man_img =`${man}`;
          let gender_img =`${item.gender}` == 1 ? `${woman_img}`: `${man_img}`;
          let poster =`${item.profile_path}` !== "null"? `${img_people}`: `${gender_img}`; 
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
