import { SearchContainer } from "./styles";
import hcbgImage from "../assets/backimg.jpg"


export default function header() {
    return (
      <>

        <SearchContainer className="back"  style={{
          backgroundImage:`url(${hcbgImage})`,
          backgroundSize: "cover",
          height: "40vh",
          color: "#f5f5f5"
        }}>
          <h1>wellcome!</h1>
          <br/>
          <h2> Get the shows and movies you love.</h2>
          
        </SearchContainer>
        
      </>
    );
  }
  