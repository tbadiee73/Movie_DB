import styled from "styled-components";


let Cardcontainer =styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin-top: 48px;
  `

let Nav = styled.div`

  position: sticky;
  top: 0;
  z-index: 10;
  background: var(  --primary-linear);
  
  font-size: 1rem;
  font-weight: 600;
  padding:20px 0;
  
  
`;

let Navdetails = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  
`;

let Navleft = styled.div`

  & span{
    color:var(--ring-light);
    font-size: 1.30rem;
    font-weight: 800;
  }

.nav_item{
    padding: 0 18px;
    cursor: pointer;
    color: var(--primary-text);
    text-transform: uppercase;
    text-indent: 10px;
 

    & img{
      padding-right:6px;
      
    }

 
  }
`;

export {Cardcontainer, Nav, Navdetails, Navleft };
