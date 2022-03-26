import styled from "styled-components";
import { Container } from "./Container.styled";

export const StyledFooter = styled.footer`
  background-color: ${({ theme }) => theme.colors.footer};
  color: #fff;
  padding: 100px 0 60px;
  ul {
    list-style-type: none;
  }
  ul li {
    margin-bottom: 20px;
    margin-left: 20px;
    font-weight: 400;
    opacity: 0.6;
  }
 
  p {
    text-align: right;
  }

  

  
  @media (max-width: ${({ theme }) => theme.mobile}) {
    text-align: center;
    ul {
      padding: 0;
    }
    p {
      text-align: center;
    }
  }
`;
