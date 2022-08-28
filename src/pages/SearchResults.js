import Navbar from "../components/Nav";
import Footer from "../components/Footer";
import { useState, useEffect } from "react";
import { get_Search } from "../helpers/server";
import { useParams } from "react-router-dom";
import ResultPage from "../components/Search/resultPage";

export default function Search() {
  let [data, setdata] = useState([]);
  let [loading, setLoading] = useState(true);
  let [error, setError] = useState(false);
  let { searchtext } = useParams();

  useEffect(() => {
    setLoading(true);
    if (searchtext !== "") {
      get_Search(searchtext)
        .then((response) => {
          setdata(response.results);
        })
        .catch((e) => {
          setError(true);
        })
        .finally(() => {
          setLoading(false);
        });
    } else {
      setdata([]);
    }
  }, [searchtext]);

  return (
    <>
      <Navbar />
      {!loading && <ResultPage list={data} />}
      <Footer />
    </>
  );
}
