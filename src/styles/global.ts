import { createGlobalStyle } from "styled-components";

import githubBackground from "../assets/github_background.svg";

export default createGlobalStyle`
   * {
      margin: 0;
      padding: 0;
      outline: 0;
      box-sizing: 0;
   };

   body {
      background: #F0F0F3 url(${githubBackground}) no-repeat 70% top;
      -webkit-font-smoothing: antialiased;
   }

   body, input, button {
      font: 16px Roboto, sans-serif;
   }

   #root {
      max-width: 960px;
      margin: 0 auto;
      padding: 20px 40px;
   }

   button {
      cursor: pointer;
   }
`;
