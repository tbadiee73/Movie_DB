import Navbar from "../components/Nav";
import Footer from "../components/Footer";
import TvSwichButton from "../components/TvList";

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

      <TvSwichButton tabs={tabs} />

      <Footer />
    </>
  );
}
