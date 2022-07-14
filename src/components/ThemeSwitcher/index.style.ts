import styled from "styled-components";
import { LIGHT_THEME_TITLE } from "~themes";

export const ThemeSwitch = styled.div`
  display: inline-flex;
  align-items: center;
  opacity: 1;
  margin-left: 32px;
  label {
    display: inline-flex;
    cursor: pointer;
    input {
      display: none;
    }
    .switcher {
      display: inline-flex;
      border-radius: 16px;
      height: 24px;
      width: 56px;
      position: relative;
      background: ${(props) =>
        props.theme.title == LIGHT_THEME_TITLE ? "rgb(18, 18, 18)" : "#ffd32a"};
    }
  }
`;

export const ThemeSwitchButton = styled.span`
  display: inline-flex;
  width: 20px;
  height: 20px;
  border-radius: 100%;
  background: rgb(255, 255, 255);
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  transition: all 0.3s cubic-bezier(0.65, 0.05, 0.36, 1) 0s;
  left: ${(props) => (props.theme.title == LIGHT_THEME_TITLE ? "2px" : "34px")};
`;

export const ThemeSwitchIcon = styled.img`
  position: absolute;
  top: 50%;
  width: 12px;
  transform: translateY(-50%);
  ${(props) =>
    props.theme.title == LIGHT_THEME_TITLE ? "right: 6px;" : "left: 6px;"};
`;
