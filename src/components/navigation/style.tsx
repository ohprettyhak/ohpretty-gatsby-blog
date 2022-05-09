import styled from 'styled-components';
import { Link } from 'gatsby';

export const TopNavigation = styled.nav`
  position: fixed;
  z-index: 9;
  width: 100%;
  height: 56px;
  background-color: var(--navigation);
  background-position: center center;
  border-bottom: 1px solid var(--line);
  backdrop-filter: blur(8px);
  transition: all 0.2s ease;
`;

export const TopNavigationContainer = styled.div`
  display: flex;
  width: 100%;
  max-width: 1280px;
  height: 100%;
  margin: 0 auto;
  padding: 0 6%;
  align-items: center;
  justify-content: space-between;
`;

export const TopLinkWrap = styled.ul`
  display: flex;
  height: 100%;
  padding: 0;
  list-style: none;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

export const TopLinkList = styled.li`
  display: table;
  height: 100%;
  margin: 0 0 0 48px;
  opacity: 1;
  transition: opacity 0.2s ease;

  :hover {
    opacity: 0.7;
  }

  a {
    display: table-cell;
    height: 100%;
    padding: 0;
    font-weight: 500;
    color: var(--text);
    text-decoration: none;
    user-select: none;
    vertical-align: middle;
    background-color: transparent;
  }
`;

export const ThemeToggleContainer = styled.div`
  display: flex;
  margin: 0 0 0 36px;
  align-items: center;
`;

export const Logo = styled(Link)`
  display: flex;
  align-items: center;
  color: var(--text);
  text-decoration: none;
  opacity: 1;
  transition: opacity 0.2s ease;

  :hover {
    opacity: 0.8;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  opacity: 1;
  color: var(--text);
  transition: opacity 0.2s ease;
  cursor: pointer;

  :hover {
    opacity: 0.8;
  }
`;

export const MenuContainer = styled.div`
  display: none;
  align-items: center;

  @media only screen and (max-width: 768px) {
    display: flex;
  }
`;

export const Menu = styled.div`
  padding: 16px 0;
  margin-left: 16px;
  border-bottom: none;
  align-items: center;
  cursor: pointer;

  ion-icon {
    width: 24px;
    height: 24px;
    margin: 0;
    padding: 0;
    color: var(--text);
    vertical-align: middle;
  }
`;

export const MobileMenu = styled.div`
  position: fixed;
  display: none;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  background: var(--mobile-menu);
  z-index: 9;
  overflow: hidden;
  animation: fadein-dropdown 0.3s both 0.3s;
  -moz-animation: fadein-dropdown 0.3s both 0.3s;
  -webkit-animation: fadein-dropdown 0.3s both 0.3s;
  -o-animation: fadein-dropdown 0.3s both 0.3s;
`;

export const MobileMenuContainer = styled.section`
  width: 100%;
  margin: 0 auto;
  padding: 0 6%;
`;

export const MobileMenuClose = styled.div`
  display: flex;
  height: 56px;
  align-items: center;
`;

export const MenuAlignRight = styled(Menu)`
  display: flex;
  margin-left: auto;
`;

export const MobileMenuWrap = styled.ul`
  margin: 32px 0 0 0;
  padding: 0;
  list-style: none;
`;

export const MobileMenuList = styled.li`
  margin: 24px 0;
  font-size: 1.5rem;
  font-weight: 700;

  a {
    width: 100%;
    color: var(--text);
    text-decoration: none;
  }
`;
