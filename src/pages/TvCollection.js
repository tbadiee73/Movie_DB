import Navbar from "../components/Nav";
import Footer from "../components/Footer";
import TV_swich_button from "../components/TvList";

export default function TvSHOW() {


  let tabs = [
    { id: "tv", name: "Popular" },
    { id: "now Playing", name: "Airing Today" },
    { id: "upcoming", name: "On TV" },
    { id: "top Rated", name: "Top Rated" },
  ];

  return (
    <>
      <Navbar />

      <TV_swich_button tabs={tabs} />
      
      <Footer />
    </>
  );
}
