import styled from "styled-components";

let Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 64px 0px 24px 0px;

  & h2 {
    margin-right: 16px;
  }
`;

let Title = styled.div`
font-weight: 600;
  border-radius:20px;
  text-align: center;
  padding:6px 12PX;
  background:var(--secondary-linear) ;
}

& a {
  padding:6px 12px;
  color:var(--primary-dark);
  

  &:focus{
    color:var(--primary-light);
    background-color:var(--primary-dark) ;
    border-radius:20px;
  
  }
}
`;

let Movie_name = styled.a`
 
  
  &:hover {
    color: var(--secondary-light);
  }
`;

let Pic_flex = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 22px 32px 22px;


  .circle{
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--primary-dark);
    width: 50px;
    height: 50px;
    border-radius: 50%;
    transform: translateY(30px);
  }

  .CircularProgressbar-trail {
    stroke: var(--primary-text);
  }
  .CircularProgressbar-path {
    stroke: var(--ring-light);
  }
  .CircularProgressbar-text {
    fill: var(--primary-text);
    font-size: 2rem;
    font-weight: 700;
  }
`;

let Image = styled.img`
  width: 150px;
  border-radius: 12px;
box-shadow: rgba(0, 0, 0, 0.4) 2px 5px 12px 2px;
`;


export { Container, Title, Movie_name, Pic_flex, Image };
