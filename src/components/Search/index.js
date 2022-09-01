import { useState } from "react";
import { useNavigate } from "react-router-dom";



export default function Search() {
  let [input, setinput] = useState("");

  let handelchange = (e) => {
    setinput(e.target.value);
  };

  let navigate = useNavigate();

  let handlesubmit = (e) => {
     e.preventDefault();
    if (input){
      navigate(`/search/${input}`);
    }
  

  
  };


  return (
    <>
      <div className="background">
        <div className="container">
          <h2>wellcome.</h2>
          <br />
          <h5> Get the shows, movies and people you love.</h5>

          <form >
          <input
            className="searchinput"
            type={"text"}
            id="search"
            placeholder="Search for..."
            value={input}
            onChange={handelchange}
          />
          <button type="primary" onClick={handlesubmit}  style={{ position: " relative", top: " 14px", right: "60px" , background:"none",  border:"none" }}>
        
            <svg
             
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="none"
              stroke="var( --secondary-light)"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              class="feather feather-search"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </button>
          </form>
         
        </div>
      </div>
    </>
  );
}