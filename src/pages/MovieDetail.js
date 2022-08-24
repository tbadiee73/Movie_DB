import Navbar from "../components/Nav";
import Footer from "../components/Footer";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import MovieDetail from "../components/MovieDetails";
import MovieInfo from "../components/MovieDetails/movieinfo";
import { get_movie_Details,get_movie_credits} from "../helpers/server";

async function getDetails(id) {
  let moviedetails = get_movie_Details(id);
  let moviecredit = get_movie_credits(id);
  let output = await Promise.all([moviedetails, moviecredit]);
  return output;
}
export default function Movie_Detail() {
  let { id } = useParams();
  let [info, setinfo] = useState(null);
  let [cast, setcast] = useState([]);
  let [crew, setcrew] = useState([]);
  let [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getDetails(id).then((results) => {
      let details = results[0];
      let credits = results[1];
      setinfo(details);
      setcast(credits.cast);
      setcrew(credits.crew);
      setLoading(false);
    });
  }, [id]);
  
  return (
    <>
      <Navbar />
      {!loading && <MovieDetail item={info} type="movie" />}
      {!loading && <MovieInfo cast={cast} crew={crew} />}
   
    
      <Footer />
    </>
  );
}
