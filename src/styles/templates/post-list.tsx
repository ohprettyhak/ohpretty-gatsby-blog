import styled from 'styled-components';
import { Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';

export const PostsList = styled.section`
  display: grid;
  margin: 0 -12px;
  grid-template-columns: 33.3% 33.3% 33.3%;
  grid-row-gap: 24px;
  margin-top: 36px;

  @media only screen and (max-width: 768px) {
    grid-template-columns: 50% 50%;
  }

  @media only screen and (max-width: 425px) {
    grid-template-columns: 100%;
  }
`;

export const PostsItem = styled.div`
  width: 100%;
  padding: 0 12px;
  user-select: none;

  ion-icon {
    height: 16px;
    margin-right: 4px;
    margin-bottom: 2px;
    vertical-align: middle;
  }
`;

export const PostsImageWapper = styled.div`
  width: 100%;
  height: 200px;
  overflow: hidden;

  @media only screen and (max-width: 1080px) {
    height: calc(20vw - 25px);
  }

  @media only screen and (max-width: 768px) {
    height: calc(30vw - 25px);
  }

  @media only screen and (max-width: 425px) {
    height: calc(50vw);
  }
`;

export const PostsImage = styled(GatsbyImage)`
  width: 100%;
  height: 100%;
  border-radius: 8px;
  overflow: hidden;
  isolation: isolate;
  transition: transform 0.3s ease-out;
  -webkit-transition: transform 0.3s ease-out;
  -moz-transition: transform 0.3s ease-out;
  -o-transition: transform 0.3s ease-out;

  :hover {
    transform: scale(0.97);
    -ms-transform: scale(0.97);
    -webkit-transform: scale(0.97);
    -o-transform: scale(0.97);
    -moz-transform: scale(0.97);
    box-shadow: 0 0 0 4px rgba(0, 0, 0, 0.075);
  }
`;

export const PostsLink = styled(Link)`
  text-decoration: none;
`;

export const PostsContent = styled.div`
  margin: 6px 0 0 0;
`;

export const PostsCategories = styled.span`
  font-size: 0.75rem;
  color: #adb5bd;
`;

export const PostsCategoriesLink = styled(Link)`
  color: #adb5bd;
  text-decoration: none;
  transition: color 0.2s ease;

  :hover {
    color: #868e96;
  }
`;

export const PostsTitle = styled.h3`
  width: 100%;
  margin-top: 2px;
  overflow: hidden;
  color: var(--text);
  font-size: 1.15rem;
  letter-spacing: -1px;
  word-break: break-all;
  white-space: normal;
`;

export const PostsSubTitle = styled.p`
  margin-top: 4px;
  color: var(--text-secondary);
  font-size: 0.9rem;
  word-break: break-all;
  white-space: normal;
`;

export const PostSub = styled.div`
  margin-top: 6px;
  font-size: 0.8rem;
`;

export const PostsReadTime = styled.span`
  margin-right: 10px;
  color: #adb5bd;
`;

export const PostsDate = styled.span`
  color: #adb5bd;
`;
