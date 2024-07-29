import React from "react";
import { Outlet } from "react-router-dom";

interface Props {
  children?: React.ReactNode;
}

function Layout({ children }: Props) {
  return <div>{children ? children : <Outlet />}</div>;
}

export default Layout;
