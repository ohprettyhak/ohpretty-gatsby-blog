import styled from 'styled-components';
import { Link } from 'gatsby';

export const Recommend = styled.div`
  display: block;
  width: 100%;
  padding: 48px 0;
`;

export const RecommendPostsList = styled.div`
  display: grid;
  margin: 0 -12px;
  grid-template-columns: 50% 50%;
  grid-row-gap: 24px;

  @media only screen and (max-width: 425px) {
    grid-template-columns: 100%;
  }
`;

export const RecommendPostsLink = styled(Link)`
  display: block;
  text-decoration: none;
  opacity: 1;
  transition: opacity 0.2s ease;

  :hover {
    opacity: 0.7;
  }
`;

export const RecommendPrevious = styled.div`
  margin: 0 12px;
  padding: 10px 12px;
  border-radius: 8px;
  background-color: var(--recommend-posts);
  transition: background-color 0.2s ease;
`;

export const RecommendNext = styled(RecommendPrevious)`
  text-align: right;
`;

export const RecommendStepText = styled.span`
  display: block;
  margin: 0;
  color: var(--text-secondary);
  font-weight: 300;
  font-size: 0.85rem;
`;

export const RecommendPostsContainer = styled.div`
  display: inline-flex;
  align-items: center;

  ion-icon {
    width: 16px;
    height: 16px;
    flex-shrink: 0;
    color: var(--text);
    vertical-align: middle;
  }
`;

export const RecommendPostsTitle = styled.span`
  display: block;
  margin-top: 4px;
  color: var(--text);
  font-weight: 800;
  font-size: 1rem;
  word-break: break-word;
  white-space: normal;
`;
