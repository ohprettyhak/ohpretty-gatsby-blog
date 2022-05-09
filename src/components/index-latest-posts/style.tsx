import styled from 'styled-components';
import { Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';

export const LatestPosts = styled.section`
  position: relative;
  top: 0;
  padding: 56px 0;
  transition: all 0.2s ease;

  h2 {
    color: var(--text);
    font-size: 2rem;
  }
`;

export const LatestPostsList = styled.div`
  width: 100%;
  margin-top: 24px;
`;

export const LatestPostsItem = styled.li`
  display: grid;
  width: 100%;
  grid-template-columns: 16% 84%;
  list-style: none;
  border-top: 1px solid var(--line);
  opacity: 1;
  transition: all 0.2s ease;

  :hover {
    opacity: 0.7;
  }

  :last-child {
    border-bottom: 1px solid var(--line);
  }

  @media only screen and (max-width: 1080px) {
    grid-template-columns: 18% 82%;
  }

  @media only screen and (max-width: 800px) {
    grid-template-columns: 22.5% 77.5%;
  }

  @media only screen and (max-width: 700px) {
    grid-template-columns: 24% 76%;
  }

  @media only screen and (max-width: 560px) {
    grid-template-columns: 100%;
  }
`;

export const LatestPostsLink = styled(Link)`
  text-decoration: none;
`;

export const LatestPostsImageContainer = styled.div`
  display: block;
  padding: 24px 12px 24px 0;

  @media only screen and (max-width: 560px) {
    display: none;
    padding: 0;
  }
`;

export const LatestPostsImage = styled(GatsbyImage)`
  display: block;
  width: 100%;
  height: 100%;
  border-radius: 8px;
  overflow: hidden;
  isolation: isolate;
`;

export const LatestPostsContents = styled.div`
  display: flex;
  padding: 24px 0 24px 12px;
  align-items: center;

  ion-icon {
    height: 16px;
    margin-right: 4px;
    margin-bottom: 2px;
    vertical-align: middle;
  }

  @media only screen and (max-width: 560px) {
    padding: 16px 0;
  }
`;

export const LatestPostsContainer = styled.div`
  width: 100%;
`;

export const LatestPostsCategories = styled.span`
  display: block;
  font-size: 0.75rem;
  color: #adb5bd;
`;

export const LatestPostsCategoriesLink = styled(Link)`
  color: #adb5bd;
  text-decoration: none;
  transition: color 0.2s ease;

  :hover {
    color: #868e96;
  }
`;

export const LatestPostsTitle = styled.h3`
  margin-top: 2px;
  overflow: hidden;
  color: var(--text);
  font-size: 1.2rem;
  letter-spacing: -1px;
  white-space: break-all;
`;

export const LatestPostsSubTitle = styled.p`
  width: 100%;
  margin-top: 2px;
  color: var(--text-secondary);
  font-size: 0.9rem;
  word-break: break-all;
  white-space: normal;
`;

export const LatestPostsSub = styled.div`
  margin-top: 6px;
  font-size: 0.8rem;
`;

export const LatestPostsReadTime = styled.span`
  margin-right: 10px;
  color: #adb5bd;
`;

export const LatestPostsDate = styled.span`
  color: #adb5bd;
`;

export const LatestPostsMoreLink = styled(LatestPostsLink)`
  display: inline-block;
  margin-top: 24px;
  opacity: 1;
  transition: opacity 0.2s ease;

  :hover {
    opacity: 0.7;
  }
`;

export const LatestPostsMore = styled.p`
  display: flex;
  color: var(--text-secondary);
  font-weight: 500;
  font-size: 1.05rem;
  align-items: center;
`;
