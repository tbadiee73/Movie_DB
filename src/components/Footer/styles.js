import styled from "styled-components";

const Footer_ui = styled.section`
  background: var(--primary-linear);
  color: var(--primary-text);

  & footer {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px 0 20px ;
  

    & span {
      color: rgba(187, 199, 193, 0.75);
      font-size: large;
      
    
      

      .link {
        padding: 0 10px;
        position: relative;
        top:10px;
       
        
      }
    }

   .logo {
    position: relative;
        top:10px;
    
      & img {
  
        padding:0px 10px;
        cursor: pointer;
      }

  
    }
  }
`;

export { Footer_ui };
