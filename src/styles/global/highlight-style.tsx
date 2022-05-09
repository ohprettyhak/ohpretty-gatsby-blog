import { createGlobalStyle } from 'styled-components';

const HighlightStyle = createGlobalStyle`
  // grvsc-continer 
  //  → grvsc-code 
  //    → grvsc-line (grvsc-line-highlighted)
  //      → - grvsc-gutter 
  //        - grvsc-line-number
  //        - grvsc-source

  .grvsc-container {
    font-family: var(--code-font-family);
    border: 1px solid var(--grvsc-border) !important;
    border-radius: 4px !important;
    background-color: var(--grvsc-background) !important;
    transition: all 0.2s ease;
  }

  .grvsc-code, .grvsc-line {
    width: 100%;
    padding: 0 !important;
    margin: 0 !important;
    color: white !important;
    font-size: 0.9rem;
    hyphens: auto !important;
    border: none !important;
    border-radius: 0 !important;
    background-color: transparent !important;
  }

  .grvsc-code {
    padding: 0 !important;
    border-radius: 0 !important;
  }

  .grvsc-line::before {
    padding: 2px 0;
  }

  .grvsc-gutter-pad {
    padding-left: 0 !important;
  }

  .grvsc-gutter::before {
    color: var(--grvsc-line-text);
    font-family: var(--code-font-family);
  }
  
  .grvsc-line-number {
    width: 3rem !important;
    padding: 0 8px 0 12px !important;
  }

  .grvsc-line-number::before {
    color: var(--grvsc-line-text);
    font-family: var(--code-font-family);
    font-size: 0.7rem;
  }

  .grvsc-source {
    padding: 2px 0;
    color: var(--mtk1);
    font-weight: 400 !important;
    font-family: var(--code-font-family);
    font-size: 0.9rem;
    line-height: 1.4;
  }

  .mtk4 { color: var(--mtk4) !important }
  .mtk1 { color: var(--mtk1) !important }
  .mtk11 { color: var(--mtk11) !important }
  .mtk12 { color: var(--mtk12) !important }
  .mtk15 { color: var(--mtk15) !important }
  .mtk8 { color: var(--mtk8) !important }
  .mtk7 { color: var(--mtk7) !important }
  .mtk3 { color: var(--mtk3) !important }
  
  .grvsc-line-highlighted::before {
    background-color: var(--grvsc-line-highlighted-background-color) !important;
    box-shadow: inset var(--grvsc-line-highlighted-border-width) 0 0 0 var(--grvsc-line-highlighted-border-color) !important;
  }
`;

export default HighlightStyle;
