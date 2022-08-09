import Navbar from "../components/Nav";
import Footer from "../components/Footer";
import {get_popular_people} from "../helpers/server"
import { useState, useEffect } from "react";
import People_Box from "../components/PeoplePage"
import PaginationOutlined from "../components/Pagination";

export default function People (){

let [data, setdata]=useState([]);
let [page, setpage]=useState(1);


useEffect(() => {
    get_popular_people(page).then((response) => {
     setdata(response);

    });
}, [page])

return (

    <>
    <Navbar/>
    <People_Box list={data} />
    <PaginationOutlined setPage={(number) =>{

setpage(number)
}} pageNumber={20}  currentpage={page}/>
    <Footer />
    </>
)

}