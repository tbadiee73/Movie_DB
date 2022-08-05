import styled from "styled-components";

const Footer_ui = styled.section`
  background-color: var(--primary-dark);
  color: var(--primary-text);
  
 

  & footer {

    width: 50%;
    display: flex;
    justify-content: space-between;
    padding: 80px;

    & img {
      transform: translateY(-40%);
    }

    & .footer_column {
      
      padding: 14px;
      display: flex;
      flex-direction: column;
    }
  }
`;

export { Footer_ui };
