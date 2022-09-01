import Navbar from "../components/Nav";
import Footer from "../components/Footer";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import PersonInformation from "../components/Person_Information";
import { get_person_info, get_credits } from "../helpers/server";

async function getDetails(id) {
  let personDetails = get_person_info(id);
  let personeCredit = get_credits(id);
  let output = await Promise.all([personDetails, personeCredit ]);
  return output;
}

export default function Movie_Detail() {
  let { id } = useParams();
  let [info, setinfo] = useState({});
  let [credit, setCredit] = useState([]);
  let [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getDetails(id).then((results) => {
      let details = results[0];
      let credits = results[1];
      setinfo(details);
      setCredit(credits);
      setLoading(false);
    });
  }, [id]);

  return (
    <>
      <Navbar />
      {!loading &&<PersonInformation list={info} credit={credit} />}
      <Footer />
    </>
  );
}
