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
      <main className="bg-background-light dark:bg-background-dark mx-auto my-0 h-full">
        {children ? children : <Outlet />}
      </main>
      <Footer />
    </>
  );
}

export default Layout;
