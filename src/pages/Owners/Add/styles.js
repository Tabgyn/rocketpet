import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;

  form {
    flex: 1 1 0%;

    section {
      display: flex;
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
        color: #eceff1;
        margin: 0px 0px 15px;
      }
    }
  }
`;
