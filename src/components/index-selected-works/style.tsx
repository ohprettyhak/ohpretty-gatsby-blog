import styled from 'styled-components';
import { Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';

export const SelectedWorks = styled.section`
  padding: 0 0 56px 0;
  transition: all 0.2s ease;

  h2 {
    color: var(--text);
    font-size: 2rem;
  }
`;

export const SelectedWorksList = styled.div`
  display: grid;
  width: 100%;
  margin-top: 24px;
  grid-template-columns: 1fr 1fr;
  gap: 1.4rem;

  @media only screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const SelectedWorksItem = styled(Link)`
  padding: 28px;
  text-decoration: none;
  border: 1px solid var(--line);
  border-radius: 16px;
  background-color: var(--category-background);
  opacity: 1;
  transition: all 0.2s ease;

  :hover {
    opacity: 0.7;
  }
`;

export const SelectedWorksItemInfo = styled.p`
  color: var(--text-secondary);
  font-size: 0.9rem;
`;

export const SelectedWorksItemTitle = styled.p`
  margin-top: 12px;
  color: var(--text);
  font-size: 1.2rem;
  font-weight: bold;
`;

export const SelectedWorksItemSubtitle = styled.p`
  margin-top: 8px;
  color: var(--text-secondary);
  font-size: 0.95rem;
  font-weight: 500;
`;

export const SelectedWorksItemImage = styled(GatsbyImage)`
  width: 100%;
  margin-top: 12px;
  overflow: hidden;
  isolation: isolate;
  pointer-events: none;
  user-select: none;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
`;

export const SelectedWorksMoreLink = styled(Link)`
  display: inline-block;
  margin-top: 24px;
  text-decoration: none;
  opacity: 1;
  transition: opacity 0.2s ease;

  :hover {
    opacity: 0.7;
  }
`;

export const SelectedWorksMore = styled.p`
  display: flex;
  color: var(--text-secondary);
  font-weight: 500;
  font-size: 1.05rem;
  align-items: center;
`;
