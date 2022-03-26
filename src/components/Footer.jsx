import React from 'react'
import SocialIcons from './SocialIcons'
import { Container } from './styled/Container.styled'
import { Flex } from './styled/Flex.styled'
import { StyledFooter } from './styled/Footer.styled'
import { About } from './styled/About.styled'


const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        <img src="./images/logo_white.svg" alt="" />

        <Flex>
          <ul>
            <li> <img src="./images/icon-location.svg" alt="pin" /> 
               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </li>
            <li> <img src="./images/icon-phone.svg" alt="pin"/> +1-543-123-4567</li>
            <li><img src="./images/icon-email.svg" alt="pin"/> example@huddle.com</li>
          </ul>
          <About>
            <li>About Us</li>
            <li>What We Do</li>
            <li>FAQ</li>
          </About>

          <About>
            <li>Career</li>
            <li>Blog</li>
            <li>Contact Us</li>
          </About>

          <SocialIcons />
        </Flex>

        <p>&copy; Copyright 2022 Huddle. All rights reserved</p>
      </Container>
    </StyledFooter>
  );
}

export default Footer