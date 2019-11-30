import * as React from "react";
import * as Styled from "./header.styled";
import { nineBallImage } from "../../../../static/img/9-ball-rack.jpg";

const Header = () => {
  return (
    <Styled.HeaderOuterWrapper>
      <Styled.NineBallImage>
        <img src={"static/img/9-ball-rack.png"} />
      </Styled.NineBallImage>
      <Styled.Buttons>
        <a href='#'>Login</a>
        <a href='#'>Signup</a>
      </Styled.Buttons>
    </Styled.HeaderOuterWrapper>
  );
};

export default Header;
