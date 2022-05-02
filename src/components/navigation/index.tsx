import React from 'react';
import { useLocation } from '@reach/router';
import { Link } from 'gatsby';
import styled from 'styled-components';
import Switch from 'react-switch';
import { StaticImage } from 'gatsby-plugin-image';

import metaConfig from '../../../gatsby-meta-config';
import { GlobalStyle, ModeStyle } from '../../styles';
import { useDarkMode } from '../../hooks/useDarkMode';

const TopNavigation = styled.nav`
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

const TopNavigationContainer = styled.div`
  display: flex;
  width: 100%;
  max-width: 1280px;
  height: 100%;
  margin: 0 auto;
  padding: 0 6%;
  align-items: center;
  justify-content: space-between;
`;

const TopLinkWrap = styled.ul`
  display: flex;
  height: 100%;
  padding: 0;
  list-style: none;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const TopLinkList = styled.li`
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

const ThemeToggleContainer = styled.div`
  display: flex;
  margin: 0 0 0 36px;
  align-items: center;
`;

const Logo = styled(Link)`
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

const LogoContainer = styled.div`
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

const MenuContainer = styled.div`
  display: none;
  align-items: center;

  @media only screen and (max-width: 768px) {
    display: flex;
  }
`;

const Menu = styled.div`
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

const MobileMenu = styled.div`
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

const MobileMenuContainer = styled.section`
  width: 100%;
  margin: 0 auto;
  padding: 0 6%;
`;

const MobileMenuClose = styled.div`
  display: flex;
  height: 56px;
  align-items: center;
`;

const MenuAlignRight = styled(Menu)`
  display: flex;
  margin-left: auto;
`;

const MobileMenuWrap = styled.ul`
  margin: 32px 0 0 0;
  padding: 0;
  list-style: none;
`;

const MobileMenuList = styled.li`
  margin: 24px 0;
  font-size: 1.5rem;
  font-weight: 700;

  a {
    width: 100%;
    color: var(--text);
    text-decoration: none;
  }
`;

const Navigation: React.FC = () => {
  const { pathname } = useLocation();
  const { theme, toggleTheme } = useDarkMode();

  const setMobileMenu = (action: boolean) => {
    const view = document.getElementById('mobile-menu');
    if (action) view.style.display = 'block';
    else view.style.display = 'none';
  };

  return (
    <React.Fragment>
      <GlobalStyle />
      <ModeStyle />
      <TopNavigation>
        <TopNavigationContainer>
          {pathname.replace(/\//g, '') === metaConfig.sitePathPrefix.replace(/\//g, '') ? (
            <LogoContainer onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <StaticImage src="../../assets/logo-eastwood-hamburger.png" alt="logo" placeholder="none" width={40} />
            </LogoContainer>
          ) : (
            <LogoContainer>
              <Logo to="/">
                <StaticImage src="../../assets/logo-eastwood-hamburger.png" alt="logo" placeholder="none" width={40} />
              </Logo>
            </LogoContainer>
          )}
          <TopLinkWrap>
            <TopLinkList>
              <Link to="/post">Post</Link>
            </TopLinkList>
            <TopLinkList>
              <Link to="/work">Work</Link>
            </TopLinkList>
            <TopLinkList>
              <Link to="/about">About</Link>
            </TopLinkList>
            <ThemeToggleContainer>
              {theme && (
                <Switch
                  checked={theme === 'light' ? false : true}
                  onChange={toggleTheme}
                  onColor="#ffffff"
                  offColor="#25201d"
                  onHandleColor="#25201d"
                  offHandleColor="#ffffff"
                  handleDiameter={20}
                  uncheckedIcon={false}
                  uncheckedHandleIcon={
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: '100%',
                        fontSize: 12,
                      }}
                    >
                      🌤️
                    </div>
                  }
                  checkedIcon={false}
                  checkedHandleIcon={
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: '100%',
                        fontSize: 12,
                      }}
                    >
                      🌙
                    </div>
                  }
                  height={22}
                  width={46}
                  boxShadow="0px 1px 5px rgba(37, 32, 29, 0.6)"
                  activeBoxShadow="0px 0px 1px 5px rgba(37, 32, 29, 0.2)"
                />
              )}
              {!theme && <div style={{ width: '46px' }} />}
            </ThemeToggleContainer>
          </TopLinkWrap>
          <MenuContainer>
            {theme && (
              <Switch
                checked={theme === 'light' ? false : true}
                onChange={toggleTheme}
                onColor="#ffffff"
                offColor="#25201d"
                onHandleColor="#25201d"
                offHandleColor="#ffffff"
                handleDiameter={20}
                uncheckedIcon={false}
                uncheckedHandleIcon={
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      height: '100%',
                      fontSize: 12,
                    }}
                  >
                    🌤️
                  </div>
                }
                checkedIcon={false}
                checkedHandleIcon={
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      height: '100%',
                      fontSize: 12,
                    }}
                  >
                    🌙
                  </div>
                }
                height={22}
                width={46}
                boxShadow="0px 1px 5px rgba(37, 32, 29, 0.6)"
                activeBoxShadow="0px 0px 1px 5px rgba(37, 32, 29, 0.2)"
              />
            )}
            <Menu style={{ display: 'inline-block' }} onClick={() => setMobileMenu(true)}>
              <ion-icon name="menu-outline" />
            </Menu>
          </MenuContainer>
        </TopNavigationContainer>
        <MobileMenu id="mobile-menu">
          <MobileMenuContainer>
            <MobileMenuClose>
              <MenuAlignRight onClick={() => setMobileMenu(false)}>
                <ion-icon name="close-outline" />
              </MenuAlignRight>
            </MobileMenuClose>
            <MobileMenuWrap>
              <MobileMenuList>
                <Link to="/post">Post</Link>
              </MobileMenuList>
              <MobileMenuList>
                <Link to="/work">Work</Link>
              </MobileMenuList>
              <MobileMenuList>
                <Link to="/about">About</Link>
              </MobileMenuList>
            </MobileMenuWrap>
          </MobileMenuContainer>
        </MobileMenu>
      </TopNavigation>
    </React.Fragment>
  );
};

export default Navigation;
