import React, { useMemo } from 'react';
import styled from 'styled-components';

const TableContainer = styled.div`
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

const TableInner = styled.div`
  padding-left: 16px;
  border-left: 1px solid var(--toc-border);
`;

const ContentTitle = styled.p`
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

const ContentList = styled.div`
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

type TableElementDataProps = {
  items: string;
  currentHeaderUrl?: string;
};

const TableOfContents: React.FC<TableElementDataProps> = ({ items, currentHeaderUrl }) => {
  const replaceItems = useMemo(() => {
    if (currentHeaderUrl) {
      return items.replace(`"${currentHeaderUrl}"`, `"${currentHeaderUrl}" class="active"`);
    } else {
      return items;
    }
  }, [items, currentHeaderUrl]);

  return (
    <TableContainer>
      <TableInner>
        <ContentTitle>
          <ion-icon name="layers" />
          TABLE OF CONTENTS
        </ContentTitle>
        <ContentList dangerouslySetInnerHTML={{ __html: replaceItems }} />
      </TableInner>
    </TableContainer>
  );
};

export default TableOfContents;
