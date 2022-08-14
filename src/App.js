import "./styles.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home";
import Movies from "./pages/MovieCollection";
import TvSHOW from "./pages/TvCollection";
import MovieDetailpage from "./pages/MovieDetail"
import People from "./pages/People"
import PersonInformation from "./pages/Persone_Information"
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Movies" element={<Movies />} />
        <Route path="/TvShow" element={<TvSHOW />} />
        <Route path="/movie/:id" element={<MovieDetailpage />} />
        <Route path="/People" element={<People/>} />
        <Route path="/person/:id" element={<PersonInformation/>} />
       
      </Routes>
    </BrowserRouter>
  );
}

export default App;



//https://developers.themoviedb.org/3/movies/get-latest-movie  API

