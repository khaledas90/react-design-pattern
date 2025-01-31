import { useContext, createContext } from "react";
import { Data } from "./card";

export type CardType = { data: Data };
export const CardContext = createContext<CardType | undefined>(undefined);

export function useCardContext() {
  const context = useContext(CardContext);
  if (context === undefined) {
    throw new Error("useCard must be used within a CardProvider");
  }
  return context;
}
