import React, { createContext, useState, Dispatch, ReactElement } from "react";

import { Props } from "../../types/types";

interface NavBarConextType {
  isBurgerOpen: boolean;
  setIsBurgerOpen: Dispatch<any>;
}

export const NavBarConext = createContext<NavBarConextType>({
  isBurgerOpen: false,
  setIsBurgerOpen: () => {}
});

export const NavBarConextProvider = ({ children }: Props): ReactElement => {
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
