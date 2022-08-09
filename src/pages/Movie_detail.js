import Navbar from "../components/Nav";
import Footer from "../components/Footer";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import MovieDetail from "../components/MovieDetails";
import { get_movie_Details } from "../helpers/server";

export default function Movie_Detail(){
    let { id } = useParams();
    let [bio, setBio]=useState({});


    useEffect(() => {
        get_movie_Details(id).then((response) => {
            setBio(response);
        });
    }, []);

    return (

        <>
        <Navbar/>
        <MovieDetail list={bio} />
        <Footer/>
        </>
    )
}