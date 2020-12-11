import React, { useState, createContext, Dispatch, ReactElement } from "react";

import { Props } from "../../types/types";

interface ConfirmationCardContextType {
  isDeleteAccountConfirmationOpen: boolean;
  areConfirmationInputsOpen: boolean;
  setIsDeleteAccountConfirmationOpen: Dispatch<any>;
  setAreConfirmationInputsOpen: Dispatch<any>;
}

export const ConfirmationCardContext = createContext<
  ConfirmationCardContextType
>({
  isDeleteAccountConfirmationOpen: false,
  areConfirmationInputsOpen: false,
  setIsDeleteAccountConfirmationOpen: () => {},
  setAreConfirmationInputsOpen: () => {}
});

export const ConfirmationCardContextProvider = ({
  children
}: Props): ReactElement => {
  const [
    isDeleteAccountConfirmationOpen,
    setIsDeleteAccountConfirmationOpen
  ] = useState(false);

  const [areConfirmationInputsOpen, setAreConfirmationInputsOpen] = useState(
    false
  );

  return (
    <ConfirmationCardContext.Provider
      value={{
        isDeleteAccountConfirmationOpen,
        setIsDeleteAccountConfirmationOpen,
        areConfirmationInputsOpen,
        setAreConfirmationInputsOpen
      }}
    >
      {children}
    </ConfirmationCardContext.Provider>
  );
};
