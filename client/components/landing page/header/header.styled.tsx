import styled from "styled-components";

export const HeaderOuterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #004380d9;
`;

export const NineBallImage = styled.div`
  width: 10%;
  margin-left: 40px;
  > img {
    width: 80%;
  }
`;

export const HeaderText = styled.h1`
  color: #fff;
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
  margin-right: 40px;
  > a {
    padding: 0 20px;
    text-decoration: none;
    color: #fff;
    &:hover {
      color: #028bca;
    }
  }
`;
