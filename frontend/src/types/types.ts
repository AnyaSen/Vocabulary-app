import { ReactNode } from "react";

export interface wordsArrType {
  newlyAdded: boolean;
  learning: boolean;
  learned: boolean;
  _id: string;
  foreignWord: string;
  translation: string;
  creator: string;
}

export interface Props {
  children: ReactNode;
}
