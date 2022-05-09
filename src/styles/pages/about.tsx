import styled from 'styled-components';

export const Article = styled.article`
  width: 100%;
  max-width: 800px;
  margin: 36px auto 64px auto;
  color: var(--text);
  font-size: 0.95rem;

  h3 {
    margin: 36px 0 16px 0;
  }

  h5 {
    margin: 16px 0 4px 0;
    text-transform: uppercase;
  }

  a {
    color: var(--text);
    text-decoration: none;
    opacity: 1;
    border-bottom: 2px dotted var(--text-secondary);
    transition: 0.2s ease-in-out;
    background: linear-gradient(to bottom, transparent 75%, var(--category-border) 0) 0/0 100% no-repeat;

    :hover {
      background-size: 100% 100%;
    }
  }
`;

export const Header = styled.div`
  width: 100%;
  max-width: 560px;
  margin: 0 auto 36px auto;
  pointer-events: none;
  user-select: none;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
`;

export const Social = styled.div`
  margin: 4px 0 12px 0;
  display: block;

  a {
    display: inline-block;
    padding: 14px;
    margin-right: 4px;
    border: 1px solid transparent;
    border-radius: 4px;
    background-color: transparent;
    transition: all 0.2s ease;

    :hover {
      border: 1px solid var(--selection);
      background-color: var(--cover);
      background-size: 0;
    }
  }

  ion-icon {
    width: 28px;
    height: 28px;
    margin: 0;
    padding: 0;
    color: var(--text);
    vertical-align: middle;
  }
`;
