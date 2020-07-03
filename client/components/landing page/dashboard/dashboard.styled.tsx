import styled from "styled-components";

export const DashboardWrapper = styled.div`
  padding: 50px;
  > h2 {
    font-size: 1.5rem;
    font-weight: 500;
    text-align: center;
  }
  > a {
    text-decoration: none;
    color: #028bca;
    &:hover {
      color: #000;
    }
  }
`;

export const StatsContainer = styled.div`
  padding: 100px 0;
  display: flex;
  justify-content: space-around;
`;
