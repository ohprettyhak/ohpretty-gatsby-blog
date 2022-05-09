import styled from 'styled-components';

export const Main = styled.main`
  width: 100%;
  max-width: 1280px;
  min-height: 100%;
  margin: 0 auto;
  padding: 0 6%;

  .utterances {
    max-width: 100% !important;
  }

  .katex {
    font-size: 1.1rem !important;
    font-family: 'Times New Roman', serif !important;
  }

  .katex .mathnormal {
    font-family: 'Times New Roman', serif !important;
  }

  .post-content {
    margin-top: 48px;

    .before {
      display: flex;
      top: auto;
      left: auto;
      padding-right: 8px;
      margin: 0;
      border-bottom: none;
      transform: translateX(-150%);

      svg {
        fill: var(--text);
      }

      @media only screen and (max-width: 768px) {
        transform: translateX(-100%);
        padding-right: 4px;
      }
    }

    .before:hover {
      background-color: transparent;
      border-radius: none;
      border-bottom: none;
    }

    h2 {
      display: flex;
      align-items: center;
      padding-top: 64px;
      margin-top: -64px;
      margin-bottom: 16px;
      color: var(--text);
      font-size: 2rem;
      word-break: break-word;
      white-space: normal;
    }

    h3 {
      display: flex;
      align-items: center;
      padding-top: 64px;
      margin-top: -64px;
      margin-bottom: 8px;
      color: var(--text);
      font-size: 1.5rem;
      word-break: break-word;
      white-space: normal;
    }

    h4 {
      display: flex;
      align-items: center;
      padding-top: 64px;
      margin-top: -64px;
      margin-bottom: 8px;
      color: var(--text);
      font-size: 1.05rem;
      word-break: break-word;
      white-space: normal;
    }

    h5 {
      display: flex;
      align-items: center;
      padding-top: 64px;
      margin-top: -64px;
      margin-bottom: 8px;
      color: var(--text);
      font-size: 1rem;
      word-break: break-word;
      white-space: normal;
    }

    h6 {
      display: flex;
      align-items: center;
      padding-top: 64px;
      margin-top: -64px;
      margin-bottom: 8px;
      color: var(--text);
      word-break: break-word;
      white-space: normal;
    }

    p {
      line-height: 1.5;
      margin-bottom: 24px;
      color: var(--text);
      font-weight: 400;
      word-break: break-all;
      white-space: normal;
    }

    ul {
      padding-left: 1.5rem;
    }

    ol {
      padding-left: 1.5rem;
    }

    li {
      font-size: 0.95rem;
      color: var(--text);
      font-weight: 300;
      padding: 4px 0;
    }

    a {
      margin-bottom: 8px;
      color: var(--text);
      transition: 0.2s ease-in-out;
      text-decoration: none;
      border-bottom: 2px dotted var(--text-secondary);
      transition: 0.2s ease-in-out;
      background: linear-gradient(to bottom, transparent 75%, var(--category-border) 0) 0/0 100% no-repeat;
    }

    a:hover {
      background-size: 100% 100%;
    }

    table {
      width: 100%;
      margin: 8px 0 12px 0;
      padding: 0;
    }

    th {
      color: var(--text);
      font-weight: bold;
    }

    td {
      color: var(--text);
      font-weight: 400;
    }

    img {
      display: block;
      max-width: 100%;
    }

    code {
      padding: 0.2rem 0.4rem;
      margin: 0 0.2rem;
      font-size: 0.8rem;
      font-family: var(--code-font-family);
      line-height: 1.4;
      hyphens: auto;
      border: 1px solid var(--grvsc-border);
      border-radius: 4px;
      background-color: var(--grvsc-background);
      transition: all 0.2s ease;
    }

    .anchor-header {
      border-bottom: none;
      background: transparent;
    }
  }
`;

export const Container = styled.div`
  min-height: 100%;
  padding-top: 56px;
  background-color: var(--primary);
  transition: background-color 0.2s ease;
`;
