import React from "react";
import { Outlet } from "react-router-dom";

import Footer from "./Footer";
import Header from "./Header";
import CategoryMain from "./Category/CategoryMain";

interface Props {
  children?: React.ReactNode;
}

function Layout({ children }: Props) {
  return (
    <>
      <Header />
      <CategoryMain />
      <main className="mx-auto my-0 h-full bg-background-light dark:bg-background-dark">
        {children ? children : <Outlet />}
      </main>
      <Footer />
    </>
  );
}

export default Layout;
