import { Link } from 'gatsby';
import styled from 'styled-components';

export const CategoryList = styled.div`
  margin-top: 56px;
  padding: 0;
  margin-bottom: 4px;
  overflow: auto;
  white-space: nowrap;
`;

export const CategoryItem = styled.div`
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

export const CategoryItemPressed = styled.p`
  display: inline-block;
  padding: 4px 12px;
  color: var(--text);
  cursor: default;
  opacity: 0.8;
`;

export const CategoryItemLink = styled(Link)`
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
