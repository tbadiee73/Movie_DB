
import { useParams } from "react-router-dom";
import { Container, Box } from "../MoviePage/style";
import { Link } from "react-router-dom";

export default function Genres (props) {

    let { genre_id, genre, genre_name } = useParams();
   
    return(
        <>
         <div className="container">
        <h2 className="title" >•{genre_name}</h2>
        <Container>
          {props.list.map((item, index) => {
            let img_url = "https://www.themoviedb.org/t/p/w220_and_h330_face/";
            let img_movie = `${img_url}${item.poster_path}`;
            return (
              <Box key={index}>
                <Link to={`/${genre}/${item.id}`}>
                  <div className="image">
                    {" "}
                    <img src={img_movie} alt="" />
                  </div>

                  <div className="name">{item.title}</div>
                </Link>
              </Box>
            );
          })}
        </Container>
 
      </div>
        </>
    )
}