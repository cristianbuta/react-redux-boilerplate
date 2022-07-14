import * as React from "react";
import { FCC } from "~types/react";
import { Wrapper } from "./index.styles";

interface ILayoutProps {
  showBurgerMenu: boolean;
}

const Layout: FCC<ILayoutProps> = (props) => {
  const { children, showBurgerMenu } = props;
  const show = showBurgerMenu ? "show-menu" : "";
  return (
    <Wrapper className={show} id="PAGE-TOP">
      {children}
    </Wrapper>
  );
};

export default React.memo(Layout);
