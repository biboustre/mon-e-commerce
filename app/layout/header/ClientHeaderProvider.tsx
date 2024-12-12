"use client";

import React, { useState, ReactNode } from "react";
import Header from "./Header";

interface ClientHeaderProviderProps {
  children: ReactNode;
}

const ClientHeaderProvider:  React.FC<ClientHeaderProviderProps> = ({ children }) => {
  const [isLoggedIn] = useState<boolean>(false);
  const userName = "bibou";

  return (
    <>
      <Header isLoggedIn={isLoggedIn} userName={userName} />
      {children}
    </>
  );
};

export default ClientHeaderProvider;