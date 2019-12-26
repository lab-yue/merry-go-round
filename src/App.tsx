import React, { useState, useEffect } from "react";
import { css, Global } from "@emotion/core";

export default function App() {
  const [text, setText] = useState("");

  useEffect(() => {
    const id = setInterval(() => {
      setText(text + "a");
    }, 1000);
    return clearInterval(id);
  }, [text]);
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
      <a-scene>
        <a-entity id="text-panel" position="0 -0.311 0">
          <a-text
            id="text"
            color="#fff"
            text={`width:10;value:value`}
            position="-5 1.493 -4.768"
          ></a-text>
        </a-entity>
      </a-scene>
    </>
  );
}
