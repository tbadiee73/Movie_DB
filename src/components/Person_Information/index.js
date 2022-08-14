import { Container, Section2, Box } from "../MovieDetails/style";
import { Link } from "react-router-dom";
import noimage from "../assets/noimage.svg"

export default function PersonInformation(props) {
  let img_profile = "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/";
  let img_people = `${img_profile}${props.list.profile_path}`;
  return (
    <div className="container">
      <Container key={props.list.id} className=" flex">
        <img className="poster_ui" src={img_people} alt="" />
        <div className="movie_info">
          <h1>{props.list.name}</h1>
          <i>
            <h3>Birthday</h3>
            <h3>{props.list.birthday}</h3>
          </i>
          <i>
            <h3>Place of Birth: </h3>
            {props.list.place_of_birth}
          </i>
          <div>
            <i>
              {" "}
              <h2>Biography</h2>
              {props.list.biography}
            </i>
          </div>
        </div>
      </Container>

      <Section2 className="column ">
        <h2>Known For</h2>
        <div className="flex scroll">
          {props.credit.slice(0, 8).map((item) => {
            let image =`https://www.themoviedb.org/t/p/w220_and_h330_face/${item.poster_path}`
            let no_image = `${noimage}`
            let poster =`${item.poster_path}` !== "null"? `${image}`: `${no_image}`;
            return (
              <Box key={item.id} >
                <Link to={`/movie/${item.id}`}>
                  <img className="image"
                    alt=""
                    src={poster}
                  />
                  <div className="name"  >
                    {item.name || item.title}
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
