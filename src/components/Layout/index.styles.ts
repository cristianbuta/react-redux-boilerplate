import styled from "styled-components";
import { mobileSize } from "~misc/theme";

export const Wrapper = styled.div`
  > .section-wrapper {
    background-color: ${(props) => props.theme.backgroundColor};
    transition: background 300ms ease 0s;
    width: 100%;

    .section {
      &.single {
        text-align: center;
        .section-box {
          width: 70%;
          @media (max-width: ${mobileSize}) {
            width: 100%;
          }
        }
      }
      margin: 0px auto;
      padding: 24px 20px;
      padding-bottom: 50px;
      max-width: 992px;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      @media (max-width: ${mobileSize}) {
        flex-direction: column;
        &.reverse {
          flex-direction: column-reverse;
        }
      }
      .section-box {
        display: flex;
        flex-direction: column;
        justify-content: left;
        width: 50%;

        @media (max-width: ${mobileSize}) {
          justify-content: center;
          text-align: center;
          width: 100%;
        }
        .box-content {
          display: flex;
          flex-direction: column;
          @media (max-width: ${mobileSize}) {
            justify-content: center;
          }
        }
      }
    }
  }
`;
