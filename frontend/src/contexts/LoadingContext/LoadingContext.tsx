import React, { createContext, useState, Dispatch, ReactElement } from "react";

import { Props } from "../../types/types";

interface LoadingContextType {
  isLoading: boolean;
  setIsLoading: Dispatch<any>;
  isProfileLoading: boolean;
  setIsProfileLoading: Dispatch<any>;
}

export const LoadingContext = createContext<LoadingContextType>({
  isLoading: true,
  setIsLoading: () => {},
  isProfileLoading: false,
  setIsProfileLoading: () => {}
});

export const LoadingContextProvider = ({ children }: Props): ReactElement => {
  const [isLoading, setIsLoading] = useState(true);
  const [isProfileLoading, setIsProfileLoading] = useState(false);

  return (
    <LoadingContext.Provider
      value={{
        isLoading,
        setIsLoading,
        isProfileLoading,
        setIsProfileLoading
      }}
    >
      {children}
    </LoadingContext.Provider>
  );
};
