import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const CategoryList = styled.ul`
  margin-top: 56px;
  padding: 0;
  margin-bottom: 4px;
  list-style: none;
`;

const CategoryItem = styled.li`
  display: inline-block;
  margin: 0 12px 14px 0;
  color: #868e96;
  font-size: 0.8rem;
  font-weight: 500;
  text-transform: uppercase;
  cursor: pointer;
  border-radius: 96px;
  border: solid 1px rgba(143, 144, 156, 0.5);
  user-select: none;
  -ms-user-select: none;
  -moz-user-select: -moz-none;
  -webkit-user-select: none;
  -khtml-user-select: none;
`;

const CategoryItemPressed = styled.p`
  display: inline-block;
  padding: 4px 12px;
  cursor: default;
  opacity: 0.9;
`;

const CategoryItemLink = styled(Link)`
  display: inline-block;
  padding: 4px 12px;
  text-decoration: none;
  opacity: 0.5;
  transition: 0.3s ease opacity;

  :hover {
    opacity: 0.9;
  }
`;

type CategoryDataProps = {
  categories: Array<any>;
  cur: number;
  totalPosts: number;
};

const PageCategory: React.FC<CategoryDataProps> = React.memo(({ categories, cur, totalPosts }) => {
  return (
    <CategoryList>
      <CategoryItem key="total">
        {cur === null ? (
          <CategoryItemPressed>All ({totalPosts})</CategoryItemPressed>
        ) : (
          <CategoryItemLink to={`/post/`}>All ({totalPosts})</CategoryItemLink>
        )}
      </CategoryItem>
      {categories.map(({ fieldValue, totalCount }) => (
        <CategoryItem key={fieldValue}>
          {cur === fieldValue ? (
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

export default PageCategory;
