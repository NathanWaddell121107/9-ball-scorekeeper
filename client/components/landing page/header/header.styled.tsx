import styled from "styled-components";

export const HeaderOuterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* background-color: #004380d9; */
`;

export const NineBallImage = styled.div`
  width: 10%;
  margin-left: 40px;
  > img {
    width: 100%;
  }
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
  margin-right: 20px;
  > a {
    padding: 0 20px;
    text-decoration: none;
    color: #28bafd;
    &:hover {
      color: #028bca;
    }
  }
`;
