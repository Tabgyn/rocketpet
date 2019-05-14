import React from 'react';

import {
  Container, Logo, Nav, NavList, NavListItem, NavItem,
} from './styles';

import logo from '../../assets/logo.svg';

const Header = () => (
  <Container>
    <Logo src={logo} alt="RocketPet" />
    <Nav>
      <NavList>
        <NavListItem>
          <NavItem>Item 1</NavItem>
        </NavListItem>
        <NavListItem>
          <NavItem>Item 2</NavItem>
        </NavListItem>
        <NavListItem>
          <NavItem>Item 3</NavItem>
        </NavListItem>
      </NavList>
    </Nav>
  </Container>
);

export default Header;
