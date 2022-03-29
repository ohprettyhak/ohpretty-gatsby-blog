import { createGlobalStyle } from 'styled-components';

const HighlightStyle = createGlobalStyle`
  .default-dark {
    background-color: #191614 !important;
  }

  .grvsc-code {
    padding: 0 !important;
    font-size: 1rem !important;
    font-weight: 400 !important;
    border-radius: 0 !important;
    background-color: #191614 !important;
  }

  .grvsc-source > span {
    font-family: var(--code-font-family);
    font-size: 0.85rem;
  }

  .grvsc-line-number::before {
    color: #aaaaaa;
    font-family: var(--code-font-family);
    font-size: 0.7rem;
  }

  .grvsc-source > span::selection {
    background-color: rgba(255, 255, 255, 0.1);
    color: white;
    text-shadow: none;
  }
  
  .grvsc-source > span::-moz-selection {
    background-color: rgba(255, 255, 255, 0.1);
    color: white;
    text-shadow: none;
  }
  
  .grvsc-source > span::-webkit-selection {
    background-color: rgba(255, 255, 255, 0.1);
    color: white;
    text-shadow: none;
  }

  .grvsc-line, .grvsc-code {
    width: 100%;
  }

  .grvsc-gutter-pad {
    padding-left: 0 !important;
  }
  
  .grvsc-line-number {
    width: 3rem !important;
    padding: 0 8px 0 12px !important;
  }
`;

export default HighlightStyle;
