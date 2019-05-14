import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Aside = styled.aside`
  width: 80px;
  background: #eceff1;

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    background: #37474f;
    padding: 20px 20px;

    img {
      height: 32px;
      width: 43px;
    }
  }
`;

export const Menu = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  height: calc(100% - 72px);

  nav {
    margin-top: 20px;

    ul li a {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      width: 100%;
      font-size: 14px;
      color: #62727b;
      padding: 15px 0;
    }

    ul li a svg {
      font-size: 24px;
      color: #62727b;
      margin: 0px 0px 3px;
    }
  }
`;

export const MenuItem = styled(NavLink)`
  :hover,
  &.active {
    background-color: #babdbe;
    color: #102027;
  }

  :hover svg,
  &.active svg {
    color: #102027;
  }
`;
