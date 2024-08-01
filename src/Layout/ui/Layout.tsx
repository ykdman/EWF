import React from "react";
import { Outlet } from "react-router-dom";

import Footer from "./Footer";
import Header from "./Header";

interface Props {
  children?: React.ReactNode;
}

function Layout({ children }: Props) {
  return (
    <>
      <Header />
      <main className="w-full h-full mx-auto my-0">
        {children ? children : <Outlet />}
      </main>
      <Footer />
    </>
  );
}

export default Layout;
