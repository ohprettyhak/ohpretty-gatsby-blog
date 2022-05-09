import React from 'react';
import { useLocation } from '@reach/router';
import { Link } from 'gatsby';
import Switch from 'react-switch';
import { StaticImage } from 'gatsby-plugin-image';

import metaConfig from '../../../gatsby-meta-config';
import { GlobalStyle, ModeStyle } from '../../styles/global';
import * as style from './style';
import { useDarkMode } from '../../hooks/useDarkMode';

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
      <style.TopNavigation>
        <style.TopNavigationContainer>
          {pathname.replace(/\//g, '') === metaConfig.sitePathPrefix.replace(/\//g, '') ? (
            <style.LogoContainer onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <StaticImage src="../../assets/logo-eastwood-hamburger.png" alt="logo" placeholder="none" width={40} />
            </style.LogoContainer>
          ) : (
            <style.LogoContainer>
              <style.Logo to="/">
                <StaticImage src="../../assets/logo-eastwood-hamburger.png" alt="logo" placeholder="none" width={40} />
              </style.Logo>
            </style.LogoContainer>
          )}
          <style.TopLinkWrap>
            <style.TopLinkList>
              <Link to="/post">Post</Link>
            </style.TopLinkList>
            <style.TopLinkList>
              <Link to="/work">Work</Link>
            </style.TopLinkList>
            <style.TopLinkList>
              <Link to="/about">About</Link>
            </style.TopLinkList>
            <style.ThemeToggleContainer>
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
            </style.ThemeToggleContainer>
          </style.TopLinkWrap>
          <style.MenuContainer>
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
            <style.Menu style={{ display: 'inline-block' }} onClick={() => setMobileMenu(true)}>
              <ion-icon name="menu-outline" />
            </style.Menu>
          </style.MenuContainer>
        </style.TopNavigationContainer>
        <style.MobileMenu id="mobile-menu">
          <style.MobileMenuContainer>
            <style.MobileMenuClose>
              <style.MenuAlignRight onClick={() => setMobileMenu(false)}>
                <ion-icon name="close-outline" />
              </style.MenuAlignRight>
            </style.MobileMenuClose>
            <style.MobileMenuWrap>
              <style.MobileMenuList>
                <Link to="/post">Post</Link>
              </style.MobileMenuList>
              <style.MobileMenuList>
                <Link to="/work">Work</Link>
              </style.MobileMenuList>
              <style.MobileMenuList>
                <Link to="/about">About</Link>
              </style.MobileMenuList>
            </style.MobileMenuWrap>
          </style.MobileMenuContainer>
        </style.MobileMenu>
      </style.TopNavigation>
    </React.Fragment>
  );
};

export default Navigation;
