import styled from 'styled-components';

export const TableContainer = styled.div`
  position: sticky;
  display: block;
  top: 56px;
  max-height: calc(100vh - 19rem);
  padding-top: 56px;
  padding-left: 36px;
  max-width: 25%;
  flex-basis: 25%;
  flex-grow: 0;

  @media only screen and (max-width: 960px) {
    display: none;
  }
`;

export const TableInner = styled.div`
  padding-left: 16px;
  border-left: 1px solid var(--toc-border);
`;

export const ContentTitle = styled.p`
  color: var(--text-secondary);
  font-weight: 500;
  font-size: 0.8rem;
  letter-spacing: 0.1rem;
  margin-bottom: 0.5rem;
  margin-top: 0;

  ion-icon {
    height: 16px;
    margin-right: 6px;
    margin-bottom: 2px;
    vertical-align: middle;
  }
`;

export const ContentList = styled.div`
  ul {
    list-style: none;
    padding: 0;
    margin: 0;

    li {
      margin-bottom: 5px;
      margin-left: 8px;

      a {
        display: block;
        padding: 4px 0;
        color: var(--text);
        font-size: 0.8rem;
        font-weight: 400;
        text-decoration: none;
        word-break: break-word;
        white-space: normal;
        opacity: 1;
        transition: opacity 0.3s ease;
      }

      a:hover {
        opacity: 0.7;
      }
    }

    ul {
      margin: 0 0 0 8px;
      padding: 0;

      li {
        margin-bottom: 0;
        margin-left: 8px;
      }
    }

    .active {
      font-weight: 700;
      text-decoration: underline;

      :hover {
        opacity: 1;
      }
    }
  }
`;
