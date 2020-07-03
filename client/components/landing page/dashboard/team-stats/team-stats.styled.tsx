import styled from "styled-components";

export const TeamStatsWrapper = styled.div`
  padding: 20px;
  min-height: 400px;
  min-width: 500px;
  border: 1px solid #000;
  box-shadow: 0 0 15px -3px;
  border-radius: 8px;
  > h4 {
    font-size: 1.25rem;
    font-weight: 500;
    text-align: center;
    margin: 0.5rem;
  }
`;

export const InnerWrapper = styled.div`
  > p {
    text-align: center;
    font-size: 0.875rem;
  }
`;

export const StatInfo = styled.div`
  padding: 0 50px;
  margin-top: 40px;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  > div {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid black;
  }
`;
