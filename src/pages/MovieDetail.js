import Navbar from "../components/Nav";
import Footer from "../components/Footer";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import MovieDetail from "../components/MovieDetails";
import { get_movie_Details, get_movie_recommendations, get_movie_credits, get_movie_genre} from "../helpers/server";


export default function Movie_Detail(){
    let { id } = useParams();
    let [info, setinfo]=useState([]);
    let [cast, setcast]=useState([]);
    let [crew, setcrew]=useState([]);
    let [recommendations, setRecommendations]= useState([]);
    let [genre, setgenre]=useState([]);
    let [loading,setLoading]=useState(false);

    useEffect(() => {
        setLoading(true);
        get_movie_Details(id).then((response) => {
            setinfo(response);
            setLoading(false);
        });

        get_movie_credits(id).then((response) => {
            setcast(response.cast);
            setcrew(response.crew);
            setLoading(false);
        });
        get_movie_recommendations(id).then((response) => {
            setRecommendations(response.results);
            setLoading(false);
        });
        get_movie_genre().then((response) =>{
            setgenre(response.genres);

        })
      
    }, [id]);

    return (

        <>
        <Navbar/>
        <MovieDetail list={info}  cast={cast} crew={crew} recommendation={recommendations} genre={genre}/>
      
        <Footer/>
        </>
    )
}