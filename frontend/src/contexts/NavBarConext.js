import React, { createContext, useState } from "react";

export const NavBarConext = createContext();

export const NavBarConextProvider = ({ children }) => {
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);

  return (
    <NavBarConext.Provider
      value={{
        isBurgerOpen,
        setIsBurgerOpen
      }}
    >
      {children}
    </NavBarConext.Provider>
  );
};
