import styled from "styled-components";

export const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  & > div,
  & > ul {
    flex: 1;
  }

  img {

    margin-right: 10px;
  }
 
  

  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
    text-align: center;
  }
`;