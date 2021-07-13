import React from "react";
import { Header } from "../components";
import * as ROUTES from "../constants/routes";
import Logo from "../logo.svg";
export default function HeaderContainer({ children }) {
  return (
    <Header>
      <Header.Frame>
        <Header.Logo to={ROUTES.HOME} alt="netflix" src={Logo} />
        <Header.ButtonLink to={ROUTES.HOME}>Sign In</Header.ButtonLink>
      </Header.Frame>
      {children}
    </Header>
  );
}
