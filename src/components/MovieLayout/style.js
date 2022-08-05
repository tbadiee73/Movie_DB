import styled from "styled-components";

const Container = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto auto ;
  gap: 15px;
  margin:86px 0;

`;
const Box = styled.a`
  width:220px;
  height:330px;
  background-color:white;
  color:white;
  border-radius:7px;
  overflow:hidden;
  position:relative;

  .circular {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--primary-dark);
    width: 50px;
    height: 50px;
    border-radius: 50%;
    transform: translateY(80px);
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
const Box_img = styled.img`
`;
const Box_name = styled.div`
  width:100%;
  height:64px;
  background-color:rgba(0, 0, 0, .5);
  text-align:center;
  bottom:0px;
  padding-top:15px;
  font-weight:800;
  color:white;
  text-shadow: 0px 0px 12px white;
  position:absolute;
  z-index:9999;`

  export {Container,Box,Box_img,Box_name}