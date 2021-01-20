import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    --color-white: #FFFF;
    --color-black: #000;
    font-size: 60%;
  }

  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {

  }

  body, input, button, textarea {
    font: 500 16px Poppins;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'MuseoModerno', cursive;
    font-weight: 400;
  }
`;
