import { createGlobalStyle } from 'styled-components';

// Used Josh Cameau's reset https://www.joshwcomeau.com/css/custom-css-reset/

const GlobalStyles = createGlobalStyle`

*, *::before, *::after {
  box-sizing: border-box;
}

* {
  margin: 0;
  padding: 0;
}

html, body {
  height: 100%;
}

body {
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
}

img, picture, video, canvas, svg {
  display: block;
  max-width: 100%;
}

input, button, textarea, select {
  font: inherit;
}

p, h1, h2, h3, h4, h5, h6 {
  overflow-wrap: break-word;
}
#root, #__next {
  isolation: isolate;
}

// my own default style
body {
  font-size: 1rem;
  font-family: ${({ theme }) => theme.fontFamily.primary};
  background-color: ${({ theme }) => theme.colors.bodyBg};
  color: ${({ theme }) => theme.colors.neutral['200']};
}

ul {
  list-style: none;
}

`;

export default GlobalStyles;
