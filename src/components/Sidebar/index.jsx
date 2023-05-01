import React, { useContext, useRef, useState } from "react";
import {
  SidebarStyled,
  LogoStyled,
  SearchStyled,
  SearchIconStyled,
  DividerStyled,
  LinkContainerStyled,
  LinkStyled,
  LinkIconStyled,
  LinkLabelStyled,
  LinkNotificationStyled,
  ThemeStyled,
  ThemeLabelStyled,
  ThemeTogglerStyled,
  ToggleThumbStyled,
  SidebarButtonStyled,
} from "./styled";
import { logoSVG } from "./../assets/index";
import {
  AiOutlineApartment,
  AiOutlineHome,
  AiOutlineLeft,
  AiOutlineSearch,
  AiOutlineSetting,
  AiOutlineUser,
} from "react-icons/ai";
import { BsPeople } from "react-icons/bs";
import { MdLogout, MdOutlineAnalytics } from "react-icons/md";
import { ThemeContext } from "./../../App";
import { useLocation } from "react-router-dom";

export const Sidebar = () => {
  const searchRef = useRef(null);
  const { setTheme, theme } = useContext(ThemeContext);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const { pathname } = useLocation();

  const searchClickHandler = () => {
    if (!sidebarOpen) {
      setSidebarOpen(true);
      searchRef.current.focus();
    } else {
      // search funcionality
    }
  };

  return (
    <SidebarStyled isOpen={sidebarOpen}>
      <>
        <SidebarButtonStyled
          isOpen={sidebarOpen}
          onClick={() => setSidebarOpen((p) => !p)}
        >
          <AiOutlineLeft></AiOutlineLeft>
        </SidebarButtonStyled>
      </>
      <LogoStyled>
        <img src={logoSVG} alt="logo" />
      </LogoStyled>
      <SearchStyled
        onClick={searchClickHandler}
        style={!sidebarOpen ? { widht: "fit-content" } : {}}
      >
        <SearchIconStyled>
          <AiOutlineSearch />
        </SearchIconStyled>
        <input
          ref={searchRef}
          style={!sidebarOpen ? { width: 0, padding: 0 } : {}}
          placeholder="Search"
        />
      </SearchStyled>
      <DividerStyled />
      {linkArray.map(({ icon, label, notification, to }) => (
        <LinkContainerStyled key={label} isActive={pathname === to}>
          <LinkStyled
            style={!sidebarOpen ? { widht: "fit-content" } : {}}
            to={to}
          >
            <LinkIconStyled>{icon}</LinkIconStyled>
            {sidebarOpen && (
              <>
                <LinkLabelStyled>{label}</LinkLabelStyled>
                {!!notification && (
                  <LinkNotificationStyled>
                    {notification}
                  </LinkNotificationStyled>
                )}
              </>
            )}
          </LinkStyled>
        </LinkContainerStyled>
      ))}
      <DividerStyled />
      <>
        {secondaryLinkArray.map(({ icon, label, click, to }) => (
          <LinkContainerStyled key={label}>
            <LinkStyled
              style={!sidebarOpen ? { widht: "fit-content" } : {}}
              {...(to && { to })}
              // to="/"
              onClick={click}
            >
              <LinkIconStyled>{icon}</LinkIconStyled>
              {sidebarOpen && <LinkLabelStyled>{label}</LinkLabelStyled>}
            </LinkStyled>
          </LinkContainerStyled>
        ))}
      </>

      <DividerStyled />
      <ThemeStyled>
        {sidebarOpen && <ThemeLabelStyled>Dark Mode</ThemeLabelStyled>}

        <ThemeTogglerStyled
          isActive={theme === "dark"}
          onClick={() => setTheme((p) => (p === "light" ? "dark" : "light"))}
        >
          <ToggleThumbStyled
            style={theme === "dark" ? { right: "1px" } : {}}
          ></ToggleThumbStyled>
        </ThemeTogglerStyled>
      </ThemeStyled>
    </SidebarStyled>
  );
};

const linkArray = [
  {
    label: "Home",
    icon: <AiOutlineHome />,
    to: "/",
    notification: 0,
  },
  {
    label: "Statistics",
    icon: <MdOutlineAnalytics />,
    to: "/statistics",
    notification: 0,
  },
  {
    label: "Customers",
    icon: <BsPeople />,
    to: "/customers",
    notification: 1,
  },
  {
    label: "Diagrams",
    icon: <AiOutlineApartment />,
    to: "/diagrams",
    notification: 0,
  },
  {
    label: "Profile",
    icon: <AiOutlineUser />,
    to: "/profile",
    notification: 0,
  },
];

const secondaryLinkArray = [
  {
    label: "Settings",
    icon: <AiOutlineSetting />,
  },
  {
    label: "Log Out",
    icon: <MdLogout />,
    to: "/",
  },
];
