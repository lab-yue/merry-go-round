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
      <h1>Merry Go Round</h1>
      <a-scene>
        <a-assets>
          <img
            id="groundTexture"
            src="https://cdn.aframe.io/a-painter/images/floor.jpg"
            crossOrigin="anonymous"
          />
          <img
            id="skyTexture"
            src="https://cdn.aframe.io/a-painter/images/sky.jpg"
            crossOrigin="anonymous"
          />
        </a-assets>

        <a-box position="-1 0.6 -3" rotation="0 45 0" color="#4CC3D9"></a-box>
        <a-sphere position="0 1.35 -5" radius="1.25" color="#EF2D5E"></a-sphere>
        <a-cylinder
          position="1 0.85 -3"
          radius="0.5"
          height="1.5"
          color="#FFC65D"
        ></a-cylinder>
        <a-plane
          position="0 .1 -4"
          rotation="-90 0 0"
          width="4"
          height="4"
          color="#7BC8A4"
        ></a-plane>

        <a-sky
          height="2048"
          radius="30"
          src="#skyTexture"
          theta-length="90"
          width="2048"
        ></a-sky>

        <a-circle
          src="#groundTexture"
          rotation="-90 0 0"
          radius="32"
        ></a-circle>
      </a-scene>
    </>
  );
}
