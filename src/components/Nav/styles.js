import styled from "styled-components";

let Cardcontainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin-top: 48px;
`;

let Nav = styled.div`
  position: sticky;
  top: 0;
  z-index: 10;
  background: var(--primary-dark);
  font-size: 1rem;
  font-weight: 600;
  padding: 12px 0;
  height:95px;
`;

let Navdetails = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

let Navleft = styled.div`
  .logo {
    padding-right: 10px;
  }

  & span {
    color: var(--ring-light);
    font-size: 1.3rem;
    font-weight: 800;
  }

  .nav_item {
    padding: 0 18px;
    cursor: pointer;
    color: var(--primary-text);
    text-transform: uppercase;
    position: relative;
    bottom: 20px;

    & img {
      padding-right: 6px;
    }
  }
`;

let SearchInput=styled.div`
position: relative;
.searchMenu{
  background: rgba(103, 115, 128, .9);
  padding: 0 7px;
  position: absolute;
  left: 0;
  width: 100%;
}
.navinput{
  width:120px;
  padding:8px;
  border: none;
  font-size: medium;
  background-color:rgba(123, 148, 160, 0.7);
  border-radius: 4px;
  
  
 &::placeholder{
    color:#fff;
    padding-left: 10px;
  }

}


.navinput:hover{
  background-color:rgba(173, 177, 179, 0.9);
}

.navinput:focus{
  width: 240px;
transition:  all 0.5s ease-in-out;
outline: none;
}

.menuOption{
color:#fff;
display:block;
border-bottom: 1px solid #fff;
padding: 10px 0;

}


`

export { Cardcontainer, Nav, Navdetails, Navleft,SearchInput };
