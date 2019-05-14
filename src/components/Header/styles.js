import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  background: #69f0ae;
  height: 50px;
  padding: 0 30px;
`;

export const Logo = styled.img`
  margin-right: 20px;
`;

export const Nav = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const NavList = styled.ul`
  display: flex;
  flex-direction: row;
  list-style: none;
`;

export const NavListItem = styled.li`
  text-transform: uppercase;
  margin-right: 10px;

  :last-child {
    margin-right: 0;
  }
`;

export const NavItem = styled.a`
  color: #fff;
`;

export const Logout = styled.button`
  margin-right: 20px;
`;
