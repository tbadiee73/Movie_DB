import Navbar from "../components/Nav";
import Footer from "../components/Footer";
import {get_popular_people} from "../helpers/server"
import { useState, useEffect } from "react";
import PeopleBox from "../components/PeoplePage"
import PaginationOutlined from "../components/Pagination";

export default function People (){

let [data, setdata]=useState([]);
let [page, setpage]=useState(1);
let [loading,setLoading]=useState(true);
let [error,setError]=useState(false);

useEffect(() => {
    get_popular_people(page).then((response) => {
     setdata(response);
    }).catch((e) => {
        setError(true)
      }).finally(() =>{
        setLoading(false);
      });
      
}, [page]);

return (

    <>
    <Navbar/>
    <PeopleBox list={data} />
    <PaginationOutlined setPage={(number) =>{

setpage(number)
}} pageNumber={20}  currentpage={page}/>

    <Footer />
    </>
)

}