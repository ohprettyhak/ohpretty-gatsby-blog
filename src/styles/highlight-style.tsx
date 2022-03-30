import { createGlobalStyle } from 'styled-components';

const HighlightStyle = createGlobalStyle`
  .default-dark {
    background-color: #191614 !important;
  }

  .grvsc-code {
    padding: 0 !important;
    font-size: 0.95rem !important;
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

  .grvsc-source::selection {
    background-color: rgba(255, 255, 255, 0.15) !important;
    text-shadow: none;
  }
  
  .grvsc-source::-moz-selection {
    background-color: rgba(255, 255, 255, 0.15) !important;
    text-shadow: none;
  }
  
  .grvsc-source::-webkit-selection {
    background-color: rgba(255, 255, 255, 0.15) !important;
    text-shadow: none;
  }

  .grvsc-source > span::selection {
    background-color: rgba(255, 255, 255, 0.15) !important;
    text-shadow: none;
  }
  
  .grvsc-source > span::-moz-selection {
    background-color: rgba(255, 255, 255, 0.15) !important;
    text-shadow: none;
  }
  
  .grvsc-source > span::-webkit-selection {
    background-color: rgba(255, 255, 255, 0.15) !important;
    text-shadow: none;
  }

  .grvsc-line, .grvsc-code {
    width: 100%;
    color: white !important;
    font-size: 0.95rem;
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
