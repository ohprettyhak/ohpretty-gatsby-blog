import styled from 'styled-components';

export const FooterContainer = styled.div`
  padding: 48px 0;
  background-color: var(--cover);
  border-top: 1px solid var(--line);
  transition: all 0.2s ease;
`;

export const FooterWrap = styled.div`
  display: flex;
  width: 100%;
  max-width: 1280px;
  min-height: 100%;
  margin: 0 auto;
  padding: 0 6%;
  justify-content: space-between;
`;

export const Copyright = styled.div`
  color: var(--text);
  font-size: 0.9rem;
  font-weight: 300;
  letter-spacing: 0.025rem;

  a {
    color: var(--text);
    text-decoration: none;
    border-bottom: 2px dotted var(--text-secondary);
    transition: 0.2s ease-in-out;
    background: linear-gradient(to bottom, transparent 75%, var(--category-border) 0) 0/0 100% no-repeat;

    :hover {
      background-size: 100% 100%;
    }
  }
`;

export const License = styled.p`
  font-size: 0.85rem;
`;

export const ScrollToTop = styled.span`
  cursor: pointer;
  opacity: 1;
  transition: opacity 0.2s ease;

  :hover {
    opacity: 0.7;
  }

  ion-icon {
    width: 24px;
    height: 24px;
    margin: 0;
    padding: 0;
    color: var(--text);
    vertical-align: middle;
  }
`;
