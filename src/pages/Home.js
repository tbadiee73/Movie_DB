import Navbar from "../components/Nav";
import Header from "../components/Search";
import Footer from "../components/Footer";
import {HomePage_swich_button} from "../components/Movielist";
import Movie from "../components/MainSection";

export default function HomePage() {
  let tabs = [
    { id: "movie", name: "Movie" },
    { id: "tv", name: "TV" },
  ];
  let tab = [
    { id: "movie", name: "Movieee" },
    { id: "tv", name: "TVee" },
  ];

  return (
    <>
    <Navbar />
    <Header/>
      
    <HomePage_swich_button tabs={tabs} /> 
    <HomePage_swich_button tabs={tab} />
      <Footer />
    </>
  );
}
