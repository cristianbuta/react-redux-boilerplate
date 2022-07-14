import styled from "styled-components";
export const HeaderContainer = styled.header`
  inset: 0px 0px 20px;
  display: block;
  margin-top: 0px;
  overflow-y: visible;
  padding: 24px 20px;
  @media (max-width: var(--mobile-screen-size)) {
    padding: 0px 20px;
  }
  position: sticky;
  z-index: 999;
  transition: background 300ms ease 0s;
  background-color: ${(props) => props.theme.backgroundColor};
`;

export const HeaderItemsContainer = styled.div`
  display: flex;
  margin: 0px auto;
  max-width: 992px;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  @media (max-width: var(--mobile-screen-size)) {
    max-width: 728px;
    justify-content: center;
    flex-direction: row-reverse;
  }
`;

export const HeaderNav = styled.nav``;

export const HeaderNavItems = styled.div`
  white-space: nowrap;
  display: flex;
  .mobile {
    @media (max-width: var(--mobile-screen-size)) {
      transform: rotate(-90deg);
    }
  }
`;

export const HeaderNavItem = styled.div`
  color: ${(props) => props.theme.textColor};
  display: inline-flex;
  position: relative;
  align-items: center;
  justify-content: center;
  height: 40px;
  padding: 0px 20px;
  cursor: pointer;
  border-bottom: 2px transparent solid;
  :hover {
    border-bottom: 2px ${(props) => props.theme.textColor} solid;
  }
  @media (max-width: var(--mobile-screen-size)) {
    display: none;
  }
`;

export const LogoLink = styled.a`
  text-decoration: none;
  cursor: pointer;
`;
