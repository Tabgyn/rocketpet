import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;

  form {
    flex: 1 1 0%;

    section {
      display: flex;
      flex-direction: column;

      margin: 0px 0px 17px;

      div {
        width: 100%;
        margin: 0px 10px;

        :first-child {
          margin-left: 0;
        }

        :last-child {
          margin-right: 0;
        }
      }

      label {
        display: flex;
        align-items: center;

        font-size: 16px;
        font-weight: bold;
        color: #62727b;
        margin: 0px 0px 15px;
      }

      input {
        height: 36px;
        font-size: 14px;
        /* color: rgb(255, 255, 255); */
        width: 100%;
        border-width: 0px;
        border-style: initial;
        border-color: initial;
        border-image: initial;
        border-radius: 6px;
        /* background: rgb(23, 21, 29); */
        padding: 4px 12px;
      }
    }
  }
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  color: #fff;
  font-weight: bold;
  cursor: pointer;
  font-size: 16px;
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
