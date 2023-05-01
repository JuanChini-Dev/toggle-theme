import React from "react";
import { Sidebar } from "../Sidebar";
import { LayoutStyled, MainStyled } from "./styled";

export const Layout = ({ children }) => {
  return (
    <LayoutStyled>
      <Sidebar />
      <MainStyled>{children}</MainStyled>
    </LayoutStyled>
  );
};
