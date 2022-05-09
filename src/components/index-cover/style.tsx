import styled from 'styled-components';

export const Cover = styled.section`
  position: absolute;
  left: 0;
  right: 0;
  width: 100%;
  padding: 100px 0;
  background-color: var(--cover);
  border-bottom: 1px solid var(--line);
  transition: all 0.2s ease;
`;

export const CoverContents = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 6%;

  span {
    display: inline-block;
    white-space: nowrap;
  }
`;

export const CoverContentTitle = styled.h2`
  color: var(--text);
  font-weight: 700;
  font-size: 2.4rem;
  line-height: 1.2;

  @media only screen and (max-width: 768px) {
    font-size: 2.2rem;
  }

  @media only screen and (max-width: 425px) {
    font-size: 1.8rem;
  }
`;

export const CoverContentSub = styled.p`
  padding-top: 16px;
  font-size: 1rem;
  color: var(--text-secondary);
  line-height: 1.5;

  @media only screen and (max-width: 768px) {
    font-size: 0.95rem;
  }

  @media only screen and (max-width: 425px) {
    font-size: 0.9rem;
  }
`;

export const CoverContentsUser = styled.p`
  margin-top: 24px;
  padding: 0;
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
`;

export const CoverContentLink = styled.a`
  color: var(--text-secondary);
  text-decoration: none;
  opacity: 1;
  transition: opacity 0.2s ease;

  :hover {
    opacity: 0.7;
  }
`;
