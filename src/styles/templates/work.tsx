import styled from 'styled-components';

export const Article = styled.article`
  max-width: 800px;
  margin: 0 auto;
  padding-bottom: 72px;
`;

export const WorkHeader = styled.section`
  padding: 72px 0 56px 0;
`;

export const WorkTitle = styled.h1`
  color: var(--text);
  font-size: 2.2rem;
  font-weight: bold;
  text-align: center;
`;

export const WorkSubtitle = styled.h2`
  margin-top: 8px;
  color: var(--text-secondary);
  font-size: 1.3rem;
  font-weight: 500;
  text-align: center;
`;

export const WorkDescription = styled.p`
  margin-top: 16px;
  color: var(--text-secondary);
  font-size: 0.95rem;
  text-align: center;
`;

export const WorkInfo = styled.section`
  padding: 0 24px 20px 24px;
  margin-bottom: 64px;
  border: 1px solid var(--line);
  border-radius: 8px;
  background-color: var(--category-background);
`;

export const WorkInfoTitle = styled.p`
  display: flex;
  color: var(--text);
  margin-top: 16px;
  font-weight: 500;
  font-size: 1.1rem;
  align-items: center;

  ion-icon {
    width: 1rem;
    height: 1rem;
    margin: 0;
    padding: 0;
    color: var(--text);
  }
`;

export const WorkInfoDescription = styled.p`
  margin-top: 2px;
  color: var(--text-secondary);
  font-size: 1rem;
`;
