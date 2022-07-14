import React from "react";
import { useTheme } from "styled-components";
import { ThemeSwitch, ThemeSwitchButton, ThemeSwitchIcon } from "./index.style";
import { LIGHT } from "~misc/theme";
import Sun from "~icons/sun.svg";
import Moon from "~icons/moon.svg";

type ThemeSwitcherProps = {
  setTheme: () => void;
  className?: string;
};

const ThemeSwitcher = (props: ThemeSwitcherProps) => {
  const theme = useTheme();

  return (
    <ThemeSwitch className={props.className || ""}>
      <label>
        <input type="checkbox" name="switcher" onChange={props.setTheme} />
        <span className="switcher">
          <ThemeSwitchButton />
          <ThemeSwitchIcon src={theme.title === LIGHT ? Moon : Sun} />
        </span>
      </label>
    </ThemeSwitch>
  );
};

export default React.memo(ThemeSwitcher);
