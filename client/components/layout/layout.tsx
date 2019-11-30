import * as React from "react";
// import * as Styled from "./layout.styled";

const Layout = props => {
  return (
    <>
      <style jsx global>
        {`
          body {
            margin: 0;
            box-sizing: border-box;
            padding: 0;
            font-family: "Mukta Vaani", sans-serif;
          }
        `}
      </style>
      {props.children}
    </>
  );
};

export default Layout;
