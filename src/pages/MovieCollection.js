import Navbar from "../components/Nav";
import Footer from "../components/Footer";
import { MovieSwichButton} from "../components/Movielist";
export default function Movies() {
  let tabs = [
    { id: "movie", name: "Popular" },
    { id: "now Playing", name: "Now Playing" },
    { id: "upcoming", name: "Upcoming" },
    { id: "top Rated", name: "Top Rated" },
  ];

  return (
    <>
      <Navbar />

      <MovieSwichButton tabs={tabs} />

      <Footer />
    </>
  );
}
