import React from 'react'
import styled from "styled-components";
import { Button } from "./styled/Button.styled";


const BottomCard = () => {
  return (
    <Bottom>
      <h2>Ready To Build Your Community?</h2>
      <Button bg="hsl(322, 100%, 66%)" color="white">
        Get Started For Free
      </Button>
    </Bottom>
  );
}

const Bottom = styled.div`
z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  border-radius: 15px;
  margin: 40px 460px;
  padding: 30px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  position: absolute;
  bottom: -1610px;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    
   display: none;
  }
`;

export default BottomCard