import styled from "styled-components";

const Container = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-evenly;


`;
const Box = styled.div`
width:200px;
height: 100%;
display: flex;
flex-direction: column;
margin:35px 20px ;
 
& :hover{
  opacity:.8;
}

& img{
  width:200px;
  height:250px;
  border-radius: 8px 8px 0px 0px;
  
}
.name{
  width: 100%;
  height:65px;
  font-weight:800;
  font-size: 1rem;
  padding: 8px 10px;
  box-shadow:2px 7px 12px 7px rgb(0 0 0 / 15%);
} 

`;

  export {Container,Box};

