import React from "react";
import Header from "./Header";

const searchLayout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
};

export default searchLayout;
