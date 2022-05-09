import styled from 'styled-components';
import { Link } from 'gatsby';

export const PaginationContainer = styled.div`
  display: flex;
  margin: 42px 0;
  align-items: center;
  justify-content: space-between;
`;

export const PaginationItem = styled(Link)`
  padding: 10px 16px;
  margin: 0;
  color: #343a40;
  font-size: 0.95rem;
  text-decoration: none;
  user-select: none;
  -ms-user-select: none;
  -moz-user-select: -moz-none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  background-color: #f8f9fa;
  border: 1px solid #dee2e6;
  border-radius: 2px;
  transition: background-color 0.3s ease;

  :hover {
    background-color: #e9ecef;
  }
`;
