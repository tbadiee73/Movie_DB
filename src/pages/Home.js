import Navbar from "../components/Nav";
import Header from "../components/Search";
import Footer from "../components/Footer";
import {HomePageSwichButton} from "../components/Movielist";


export default function HomePage() {
  let tabs = [
    { id: "movie", name: "Movie" },
    { id: "tv", name: "TV" },
  ];

  return (
    <>
    <Navbar />
    <Header/>
      
    <HomePageSwichButton  tabs={tabs}  /> 
  
      <Footer />
    </>
  );
}
