import styled from "styled-components";


let Container = styled.div`
padding:60px 0 0 ;

  .poster_ui {
    height: 380px;
    width: 22%;
    border-radius: 8px;
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 15px -3px;
  }

  & h1 {
    font-size: 3rem;
    margin: 0;
   
  }
  .genrelink{
    color:;
    margin-right:16px;

    &:hover{
      color:var( --ring-light);
    }
  }


  
  .movie_info{
    height: auto;
    width: 70%;
    display: flex;
    flex-direction: column;
   align-content: center;
   color: black;

   justify-content:center;
  
 }
 & i{
  color:#1c1d1d;
  padding:10px 0 ;
}

}
.user_score{
  display: inline-flex;
  padding:24px 0 ;

  & h4{
    padding:12px 12px 0;
  }

}

 .circle{
  background-color: var(--primary-dark);
  width: 65px;
  height: 65px;
  border-radius: 50%;

}

.CircularProgressbar-trail {
  stroke: var(--primary-text);
}
.CircularProgressbar-path {
  stroke: var(--ring-light);
}
.CircularProgressbar-text {
  fill: var(--primary-text);
  font-size: 1.5rem;
  font-weight: 700;
  text-align: center;
  
}

.tagline{
  color: #1c1d1d;
  padding:10px 0;
 
}
`;
let Section2 = styled.div`
  display: flex;
  flex-direction: column;
  margin: 72px 10px;

  & h2 {
    letter-spacing: 6px;
    font-size: 2rem;
  }
`;
const Box = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  margin: 10px 10px;

  & :hover {
    opacity: 0.8;
  }

  .name {
    width: 110px;
    height: 70px;
    font-weight: 800;
    font-size: small;
    padding: 3px 10px;
    box-shadow: 2px 7px 12px 7px rgb(0 0 0 / 15%);
    overflow: hidden;
  }

  .image {
    width: 110px;
    height: 140px;
    box-shadow: 2px 2px 20px 0px rgb(0 0 0 / 15%);
  }
`;

export { Container, Section2, Box };
