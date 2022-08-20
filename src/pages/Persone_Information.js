import Navbar from "../components/Nav";
import Footer from "../components/Footer";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import PersonInformation from "../components/Person_Information";
import { get_person_info, get_credits} from "../helpers/server";

export default function Movie_Detail(){
    let { id } = useParams();
    let [info, setinfo]=useState({});
    let [credit , setCredit] = useState([]);
  


    useEffect(() => {
     
        get_person_info(id).then((response) => {
            setinfo(response);
            
        });
        get_credits(id).then((res) => {
            setCredit(res);
          })


    }, []);

    return (

        <>
        <Navbar/>
        <PersonInformation list={info} credit={credit}/>
        <Footer/>
        </>
    )
}