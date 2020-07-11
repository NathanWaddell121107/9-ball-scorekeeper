import styled from "styled-components";

export const CounterContainer = styled.div`
  margin-top: 60px;
  display: flex;
  justify-content: center;
  > button {
    padding: 5px 10px;
    font-size: 1.5rem;
  }
  > div {
    min-width: 70px;
    border: 1px solid #000;
    display: flex;
    justify-content: center;
    align-items: center;
    > p {
      margin: 0;
    }
  }
`;
