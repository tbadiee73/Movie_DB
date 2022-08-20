import Navbar from "../components/Nav";
import Footer from "../components/Footer";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import MovieDetail from "../components/Movie&TvDetails";
import Cast from "../components/Movie&TvDetails/cast";
import { get_tv_Details, get_tv_credits } from "../helpers/server";

async function getDetails(id) {
  let tvDetails = get_tv_Details(id);
  let tvDredit = get_tv_credits(id);
  let output = await Promise.all([tvDetails, tvDredit]);
  return output;
}
export default function TvDetail() {
  let { id } = useParams();
  let [info, setinfo] = useState({});
  let [cast, setcast] = useState([]);
  let [crew, setcrew] = useState([]);
  let [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getDetails(id).then((results) => {
      let details = results[0];
      let credits = results[1];
      setinfo(details);
      setcast(credits.cast);
      setcrew(credits.crew);
      setLoading(false);
    });
  }, [id]);

  return (
    <>
      <Navbar />
      {!loading && <MovieDetail item={info} crew={crew} type="tv" />}
      {!loading && <Cast cast={cast} type="tv" />}
      <Footer />
    </>
  );
}
