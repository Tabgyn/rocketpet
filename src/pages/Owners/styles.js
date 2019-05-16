import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const ActionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 30px;

  a {
    display: flex;
    justify-content: center;
    align-items: center;

    color: rgb(255, 255, 255);
    font-weight: bold;
    cursor: pointer;
    font-size: 16px;
    align-self: stretch;
    width: 46px;
    height: 46px;
    border-radius: 50%;
  }
`;

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-column-gap: 30px;
  grid-row-gap: 30px;

  margin-bottom: 30px;
`;

export const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;

  text-align: center;
  opacity: 1;
  background: #fff;
  padding: 20px;
  border-radius: 4px;

  img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
  }

  strong {
    display: block;
    font-size: 20px;
    margin: 10px 0px 0px;
    color: #102027;
  }

  span {
    display: block;
    color: rgba(0, 0, 0, 0.6);
    margin-bottom: 20px;
    font-size: 13px;
  }
`;

export const Button = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;

  color: rgb(255, 255, 255);
  font-weight: bold;
  cursor: pointer;
  font-size: 16px;
  align-self: stretch;
  width: 100%;
  height: 46px;
  border-radius: 4px;
  border-width: 0px;
  border-style: initial;
  border-color: initial;
  border-image: initial;
  text-decoration: none;
  transition: all 0.2s ease 0s;
  padding: 0px 25px;
  background: #37474f;

  :hover {
    opacity: 0.8;
  }
`;
