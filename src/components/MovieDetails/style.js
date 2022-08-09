import styled from "styled-components";

let Container = styled.div`
height: 600px;
.background{
  mask-image: linear-gradient(rgba(0, 0, 0, 1.0), transparent);
}

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
   color: black;

   justify-content:center;
  
 }
 & p{
  color: #686b6b;
  margin-top: 0px;
}

}
.user_score{
  display: inline-flex;
  padding:18px 0 ;

  & h3{
    padding:5px 12px 0;
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
  color: #686b6b;
  padding:5px 0;
}
`;

export {Container};
