import React from 'react';

import * as style from './style';

type CategoryDataProps = {
  categories: Array<any>;
  categoryQuery: string;
  totalPosts: number;
};

const Category: React.FC<CategoryDataProps> = React.memo(({ categories, categoryQuery, totalPosts }) => {
  return (
    <style.CategoryList>
      <style.CategoryItem key="total">
        {categoryQuery === null ? (
          <style.CategoryItemPressed>All ({totalPosts})</style.CategoryItemPressed>
        ) : (
          <style.CategoryItemLink to={`/post/`}>All ({totalPosts})</style.CategoryItemLink>
        )}
      </style.CategoryItem>
      {categories.map(({ fieldValue, totalCount }) => (
        <style.CategoryItem key={fieldValue}>
          {categoryQuery === fieldValue ? (
            <style.CategoryItemPressed>
              {fieldValue} ({totalCount})
            </style.CategoryItemPressed>
          ) : (
            <style.CategoryItemLink to={`/category/${fieldValue.toLowerCase()}/`}>
              {fieldValue} ({totalCount})
            </style.CategoryItemLink>
          )}
        </style.CategoryItem>
      ))}
    </style.CategoryList>
  );
});

export default Category;
