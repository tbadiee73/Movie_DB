import "./styles.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home";
import Movies from "./pages/MovieCollection";
import MovieDetailpage from "./pages/Movie_detail"
import People from "./pages/People"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Movies" element={<Movies />} />
        <Route path="/movie/:id" element={<MovieDetailpage />} />
        <Route path="/People" element={<People/>} />
       
      </Routes>
    </BrowserRouter>
  );
}

export default App;



//https://developers.themoviedb.org/3/movies/get-latest-movie  API

