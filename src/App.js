import "./styles.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home";
import Movies from "./pages/MovieCollection";
import MovieDetail from "./components/MovieDetails"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Movies" element={<Movies />} />
        <Route path="/Details" element={<MovieDetail/>} />
       
      </Routes>
    </BrowserRouter>
  );
}

export default App;

//https://codesandbox.io/s/brave-cannon-14t8dx?file=/src/Home.js


//https://developers.themoviedb.org/3/movies/get-latest-movie  API

//https://codesandbox.io/s/silly-water-s9ibbv?file=/App.js swich