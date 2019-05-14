import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Aside = styled.aside`
  width: 80px;
  background: #009624;

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    background: #00c853;
    padding: 20px 30px;

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
      color: #5efc82;
      padding: 15px 0;
    }

    ul li a svg {
      font-size: 24px;
      color: #5efc82;
      margin: 0px 0px 3px;
    }
  }
`;

export const MenuItem = styled(Link)`
  :hover,
  :active {
    background-color: #003300;
    color: #fff;
  }

  :hover svg,
  :active svg {
    color: #fff;
  }
`;
