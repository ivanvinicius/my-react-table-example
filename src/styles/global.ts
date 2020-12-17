import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    --color-white: #FFFF;
    --color-black: #000;
    --color-background: #F0F0F7;       /* background */
    --color-text-complement: #9C98A6;  /* placeholder */
    --color-text-base: #6A6180;        /* label */
    --color-line-in-white: #E6E6F0;    /* input border */
    --color-input-background: #F8F8FC; /* input background */
    --color-button-text: #FFFFFF;      /* input text */
    --color-gray-header: #383838;
    --color-purple: #7620D8;
    --color-purple-dark: #5506B0;
    --color-orange: #DE5431;
    --color-orange-dark: #C53E1E;
    font-size: 60%;
  }
  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  body {
    background: var(--color-line-in-white);
  }
  body, input, button, textarea {
    font: 500 16px Poppins;
    color: var(--color-text-base)
  }
  h1, h2, h3, h4, h5, h6 {
    font-family: 'MuseoModerno', cursive;
    font-weight: 400;
  }
`;
