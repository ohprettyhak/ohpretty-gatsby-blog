import styled from 'styled-components';
import { GatsbyImage } from 'gatsby-plugin-image';

export const PostContainer = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  flex-direction: row;
`;

export const Article = styled.article`
  flex-grow: 0;
  max-width: 75%;
  flex-basis: 75%;

  @media only screen and (max-width: 960px) {
    max-width: 100%;
    flex-basis: 100%;
  }
`;

export const PostHeader = styled.section`
  margin-top: 48px;

  ion-icon {
    height: 16px;
    margin-right: 4px;
    margin-bottom: 2px;
    vertical-align: middle;
  }
`;

export const PostTitle = styled.h1`
  display: flex;
  padding: 4px 0;
  align-items: center;
  color: var(--text);
  font-size: 2.4rem;
  font-weight: 800;
  line-height: 1.2;
  word-break: break-word;
  white-space: normal;
`;

export const PostSubtitle = styled.p`
  margin: 0.5rem 0 1rem 0;
  color: var(--text-secondary);
  font-size: 1.15rem;
  word-break: break-word;
  white-space: normal;
`;

export const PostSub = styled.div`
  margin-top: 6px;
  color: #adb5bd;
  font-size: 0.85rem;
`;

export const PostSubDetail = styled.span`
  margin-right: 10px;
`;

export const PostCover = styled.section`
  margin-top: 48px;
`;

export const PostCoverImage = styled(GatsbyImage)`
  border-radius: 8px;
  overflow: hidden;
  isolation: isolate;
`;
