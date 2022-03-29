import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
  }

  html, body, span, figure, p, h1, h2, h3, h4, h5, h6, button, a {
    margin: 0;
    padding: 0;
    line-height: 1.5;
    font-family: var(--default-font-family);
    -webkit-text-size-adjust: 100%;
  }

  html, body, #___gatsby, #gatsby-focus-wrapper {
    height: 1px;
    min-height: 100vh;
  }

  *::selection {
    background: var(--selection);
    text-shadow: none;
  }

  *::-moz-selection {
    background: var(--selection);
    text-shadow: none;
  }

  *::-webkit-selection {
    background: var(--selection);
    text-shadow: none;
  }

  @keyframes fadein-dropdown {
    0% {
      opacity: 0;
      -webkit-transform: translate3d(0, -10%, 0);
      -ms-transform: translate3d(0, -10%, 0);
      transform: translate3d(0, -10%, 0);
    }
    100% {
      opacity: 1;
      -webkit-transform: none;
      -ms-transform: none;
      transform: none;
    }
  }

  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @-moz-keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @-webkit-keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @-o-keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export default GlobalStyle;
