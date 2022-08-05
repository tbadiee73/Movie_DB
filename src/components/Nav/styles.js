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
  background: var(--primary-dark);
  font-size: 1rem;
  font-weight: 600;
  padding: 24px 0;
`;

let Navdetails = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

let Navleft = styled.div`
  display: flex;
  justify-content: space-between;

  & a{
    cursor: pointer;
  }

  & span {
    padding: 0 16px;
    cursor: pointer;
    color: var(--primary-text);

    &:hover {
      color: var(--secondary-light);
    }
  }
`;

export {Cardcontainer, Nav, Navdetails, Navleft };
