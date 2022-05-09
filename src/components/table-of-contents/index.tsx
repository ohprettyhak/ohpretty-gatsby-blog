import React, { useMemo } from 'react';

import * as style from './style';

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
    <style.TableContainer>
      <style.TableInner>
        <style.ContentTitle>
          <ion-icon name="layers" />
          TABLE OF CONTENTS
        </style.ContentTitle>
        <style.ContentList dangerouslySetInnerHTML={{ __html: replaceItems }} />
      </style.TableInner>
    </style.TableContainer>
  );
};

export default TableOfContents;
