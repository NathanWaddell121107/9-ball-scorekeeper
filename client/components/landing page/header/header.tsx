import * as React from "react";
import * as Styled from "./header.styled";

const Header = () => {
  return (
    <Styled.HeaderOuterWrapper>
      <Styled.NineBallImage>
        <img src={"static/img/cleaned_rack.png"} />
      </Styled.NineBallImage>
      <Styled.HeaderText>9-Ball Score Keeper</Styled.HeaderText>
      <Styled.Buttons>
        <a href='#'>Login</a>
        <a href='#'>Signup</a>
      </Styled.Buttons>
    </Styled.HeaderOuterWrapper>
  );
};

export default Header;
