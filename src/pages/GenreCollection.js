import Navbar from "../components/Nav";
import Footer from "../components/Footer";
import PaginationOutlined from "../components/Pagination";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { get_discover_movie, get_discover_tv } from "../helpers/server";
import Genres from "../components/Genre";

export default function Genre() {
  let { genre_id, genre, genre_name } = useParams();
  let [data, setData] = useState([]);
  let [page, setPage] = useState();
  let [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    if (genre === "movie") {
      get_discover_movie(page, genre_id).then((response) => {
        setData(response.results);
        setLoading(false);
      });
    } else {
      get_discover_tv(page, genre_id).then((response) => {
        setData(
          response.results.map((item) => {
            return {
              ...item,
              title: item.name,
            };
          })
        );
        setLoading(false);
      });
    }
  }, [page, genre, genre_id]);

  return (
    <>
      <Navbar />

       <Genres list={data} />
      <PaginationOutlined setPage={setPage} />

      <Footer />
    </>
  );
}
