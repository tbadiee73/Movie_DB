import "./styles.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home";
import Movies from "./pages/MovieCollection";
import MovieDetailpage from "./pages/MovieDetail";
import TvSHOW from "./pages/TvCollection";
import TvDetail from "./pages/TvDetails";
import People from "./pages/People";
import PersonInformation from "./pages/Persone_Information";
import GenresPage from "./pages/GenreCollection";
import SearchResults from "./pages/SearchResults";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Movies" element={<Movies />} />
        <Route path="/movie/:id" element={<MovieDetailpage />} />
        <Route path="/TvShow" element={<TvSHOW />} />
        <Route path="/tv/:id" element={<TvDetail />} />
        <Route path="/People" element={<People />} />
        <Route path="/person/:id" element={<PersonInformation />} />
        <Route path="/genres/:genre/:genre_name/:genre_id" element={<GenresPage />} />
        <Route path="/search/:searchtext" element={<SearchResults />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
