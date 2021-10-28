import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root {
    --white: #FEFFFE;
    --light-blue: #017BFF;
    --dark-blue: #09053C;
    --shadow: 7px 10px 6px rgba(0, 0, 0, 0.25);;
}

body {
  background-color: var(--white);
}

html {
  box-sizing: border-box;
  font-size: 16px;
  font-family: 'Roboto', sans-serif;
}

*, *:before, *:after {
  box-sizing: inherit;
}

body, h1, h2, h3, h4, h5, h6, p, ol, ul, figure {
  margin: 0;
  padding: 0;
  font-weight: normal;
}

ol, ul {
  list-style: none;
}


button, select {
    cursor: pointer;
}

img {
  max-width: 100%;
  height: auto;
}

figcaption {
  display:none;
}

a {
    text-decoration: none;
    color: var(---light-blue)
}
`;
