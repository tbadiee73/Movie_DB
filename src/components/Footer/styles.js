import styled from "styled-components";

const Footer_ui = styled.section`
  background: var(--primary-linear);
  color: var(--primary-text);

  & footer {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px 0;

    & p {
      color: rgba(187, 199, 193, 0.75);
      font-size: large;

      .link {
        color: var(--ring-light);
      }
    }

   .logo {
    
      & img {
  
        padding:0px 10px;
        cursor: pointer;
      }

  
    }
  }
`;

export { Footer_ui };
