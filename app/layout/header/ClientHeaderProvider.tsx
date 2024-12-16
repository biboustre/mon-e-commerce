"use client";

import Header from "./Header";
import React, { useState } from "react";



const ClientHeaderProvider = () => {
  const [isLoggedIn] = useState<boolean>(false);
  const userName = "bibou";

  return (
    <>
      <Header isLoggedIn={isLoggedIn} userName={userName} />
    </>
  );
};

export default ClientHeaderProvider;