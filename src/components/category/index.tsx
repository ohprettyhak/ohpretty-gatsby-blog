import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const CategoryList = styled.div`
  margin-top: 56px;
  padding: 0;
  margin-bottom: 4px;
  overflow: auto;
  white-space: nowrap;
`;

const CategoryItem = styled.div`
  display: inline-block;
  margin: 0 12px 14px 0;
  zoom: 1;
  font-size: 0.8rem;
  font-weight: 500;
  cursor: pointer;
  border-radius: 96px;
  border: solid 1px var(--category-border);
  user-select: none;
  background-color: var(--category-background);
  -ms-user-select: none;
  -moz-user-select: -moz-none;
  -webkit-user-select: none;
  -khtml-user-select: none;
`;

const CategoryItemPressed = styled.p`
  display: inline-block;
  padding: 4px 12px;
  color: var(--text);
  cursor: default;
  opacity: 0.8;
`;

const CategoryItemLink = styled(Link)`
  display: inline-block;
  padding: 4px 12px;
  color: var(--text-secondary);
  text-decoration: none;
  opacity: 0.5;
  transition: 0.3s ease opacity;

  :hover {
    opacity: 0.9;
  }
`;

type CategoryDataProps = {
  categories: Array<any>;
  categoryQuery: string;
  totalPosts: number;
};

const Category: React.FC<CategoryDataProps> = React.memo(({ categories, categoryQuery, totalPosts }) => {
  return (
    <CategoryList>
      <CategoryItem key="total">
        {categoryQuery === null ? (
          <CategoryItemPressed>All ({totalPosts})</CategoryItemPressed>
        ) : (
          <CategoryItemLink to={`/post/`}>All ({totalPosts})</CategoryItemLink>
        )}
      </CategoryItem>
      {categories.map(({ fieldValue, totalCount }) => (
        <CategoryItem key={fieldValue}>
          {categoryQuery === fieldValue ? (
            <CategoryItemPressed>
              {fieldValue} ({totalCount})
            </CategoryItemPressed>
          ) : (
            <CategoryItemLink to={`/category/${fieldValue.toLowerCase()}/`}>
              {fieldValue} ({totalCount})
            </CategoryItemLink>
          )}
        </CategoryItem>
      ))}
    </CategoryList>
  );
});

export default Category;
