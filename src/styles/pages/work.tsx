import styled from 'styled-components';
import { Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';

export const Work = styled.h2`
  margin: 56px 0 42px 0;
  color: var(--text);
  font-size: 1.4rem;
`;

export const WorkList = styled.div`
  display: grid;
  gap: 1.4rem;
`;

export const WorkItem = styled.div`
  display: grid;
  padding: 28px;
  gap: 1.6rem;
  grid-template-columns: 1.5fr 2.5fr;
  border: 1px solid var(--line);
  border-radius: 16px;
  background-color: var(--category-background);

  @media only screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const WorkItemAt = styled.p`
  color: var(--text-secondary);
`;

export const WorkItemTitle = styled.p`
  margin-top: 12px;
  color: var(--text);
  font-size: 1.8rem;
  font-weight: bold;
`;

export const WorkItemSubtitle = styled.p`
  margin-top: 12px;
  color: var(--text-secondary);
  font-size: 1.1rem;
  font-weight: 500;
`;

export const WorkCoverImage = styled(GatsbyImage)`
  width: 100%;
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

export const ViewMore = styled(Link)`
  display: inline-block;
  padding: 12px 20px;
  margin-top: 24px;
  color: var(--text);
  text-decoration: none;
  border: 1px solid var(--line);
  border-radius: 24px;
  opacity: 1;
  transition: 0.2s ease-in-out;

  :hover {
    opacity: 0.7;
  }
`;
