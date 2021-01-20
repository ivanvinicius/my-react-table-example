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

  body #root {
    width: 100vw;
    height: 100vh;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: #236eac;
    background-image: linear-gradient(33deg, #236eac, #4b8691, #5a9f74, #5db951)
  }

  body, input, button, textarea {
    font: 500 16px Poppins;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'MuseoModerno', cursive;
    font-weight: 400;
  }
`;
