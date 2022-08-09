import { SearchContainer } from "./styles";
import hcbgImage from "../assets/backsearch.jpg"


export default function header() {
    return (
      <>

        <SearchContainer className="container"  style={{
          backgroundImage:`url(${hcbgImage})`,
          backgroundSize: "cover",
          height: "40vh",
          color: "#f5f5f5"
        }}>
          <h2>wellcome!</h2>
          <br/>
          <h2> Get the shows and movies you love.</h2>
          
        </SearchContainer>
        
      </>
    );
  }
  