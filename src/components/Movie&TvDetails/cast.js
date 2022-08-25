import { Section2, Box } from "./style";
import { Link } from "react-router-dom";
import man from "../assets/man.svg";
import woman from "../assets/woman.svg";




export default function Cast (props){
 console.log(props);

return (
    <div className="container">
    <Section2 className="column ">

    <div className="flex_start scroll ">
      {props.data.map((item) => {
        let images_people = `https://www.themoviedb.org/t/p/w138_and_h175_face/${item.profile_path}`;
        let woman_img = `${woman}`;
        let man_img = `${man}`;
        let gender_img =
          `${item.gender}` == 1 ? `${woman_img}` : `${man_img}`;
        let poster =
          `${item.profile_path}` !== "null"
            ? `${images_people}`
            : `${gender_img}`;
        return (
          <Box key={item.id} >
            <Link to={`/person/${item.id}`}>
              <img alt="" src={poster} className="image" />
              <div className="name">
                {item.name}
                <br />
                <i className="character">{item.character}</i>
              </div>
            </Link>
          </Box>
        );
      })}
    </div>
  </Section2>
  </div>
);

}