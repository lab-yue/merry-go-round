import React from "react";
import { css, Global } from "@emotion/core";

export default function App() {
  return (
    <>
      <Global
        styles={css`
          html,
          body {
            font-family: sans-serif;
            text-align: center;
            font-size: 20px;
            margin: 0;
            padding: 0;
            width: 100%;
            height: 100%;
          }
          ul {
            margin: 0;
            padding: 0;
            list-style: none;
          }
          a {
            text-decoration: none;
          }
          #root {
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
          }
        `}
      />
      <h1>tsx-spa-starter</h1>
    </>
  );
}
