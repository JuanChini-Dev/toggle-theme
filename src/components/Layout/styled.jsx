import styled from "styled-components";

import { v } from "./../../styles/variables";

export const LayoutStyled = styled.div`
  display: flex;
`;

export const MainStyled = styled.main`
  padding: calc(${v.smSpacing} * 2);

  h1 {
    font-size: 14px;
  }
`;
