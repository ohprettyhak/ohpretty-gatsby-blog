import React from 'react';

import * as style from './style';

type PageDataProps = {
  cur: number;
  max: number;
  categoryQuery: string;
};

const Pagination: React.FC<PageDataProps> = ({ cur, max, categoryQuery }) => {
  const path = categoryQuery ? categoryQuery.toLowerCase() : null;
  const rst = [];

  if (cur !== 1)
    rst.push(
      <style.PaginationItem
        key={`back`}
        to={
          path === null
            ? cur - 1 == 1
              ? `/post/`
              : `/post/${cur - 1}/`
            : cur - 1 == 1
            ? `/category/${path}/`
            : `/category/${path}/${cur - 1}/`
        }
      >
        &larr;&nbsp;&nbsp;Newer Posts
      </style.PaginationItem>,
    );
  else rst.push(<div key={`empty`}></div>);
  if (cur != max)
    rst.push(
      <style.PaginationItem key={`foward`} to={path === null ? `/post/${cur + 1}/` : `/category/${path}/${cur + 1}/`}>
        Older Posts&nbsp;&nbsp;&rarr;
      </style.PaginationItem>,
    );
  return <style.PaginationContainer>{rst}</style.PaginationContainer>;
};

export default Pagination;
