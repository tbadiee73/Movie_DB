import Navbar from "../components/Nav";
import Footer from "../components/Footer";
import {Movie_swich_button} from "../components/Movielist";
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

      <Movie_swich_button tabs={tabs} />
      
      <Footer />
    </>
  );
}
