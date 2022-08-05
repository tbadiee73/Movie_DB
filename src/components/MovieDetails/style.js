import styled from "styled-components";

let Background = styled.div`
  background-color: rgb(92, 99, 158);

  .poster_ui {
    width: 25%;
    border-radius: 8px;
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 15px -3px;
  }

  
  .movie_info{
    height: auto;
    width: 70%;
    display: flex;
    flex-direction: column;
   align-content: center;
   color: #fff;

   justify-content:center;
  
   & h2{
    margin-bottom: 24px;
 }
 & h3 {
  margin-bottom:8px;
}
& h5{
  margin: 24px 0 8px 0;
}
    
    
 }
`;

export { Background };
