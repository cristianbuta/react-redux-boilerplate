import React from "react";
import { Logo, ThemeSwitcher } from "~components";
import { scrollToSection, SECTIONS } from "~utils";
import {
  HeaderContainer,
  HeaderItemsContainer,
  HeaderNavItem,
  LogoLink,
  HeaderNav,
  HeaderNavItems,
} from "./index.style";

const sections = Object.keys(SECTIONS);

type HeaderProps = {
  setTheme: () => void;
};

const Header = (props: HeaderProps) => {
  return (
    <HeaderContainer>
      <HeaderItemsContainer>
        <LogoLink
          onClick={() => {
            scrollToSection("PAGE-TOP");
          }}
          aria-current="page"
        >
          <Logo withText />
        </LogoLink>
        <HeaderNav>
          <HeaderNavItems>
            {sections.map((section, key) => {
              return (
                <HeaderNavItem
                  key={key}
                  onClick={() => {
                    scrollToSection(SECTIONS[section].id);
                  }}
                >
                  {SECTIONS[section].name}
                </HeaderNavItem>
              );
            })}
            <ThemeSwitcher className={"mobile"} setTheme={props.setTheme} />
          </HeaderNavItems>
        </HeaderNav>
      </HeaderItemsContainer>
    </HeaderContainer>
  );
};

export default React.memo(Header);
