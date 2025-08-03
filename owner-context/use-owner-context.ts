import { createContext, useContext } from "react";
import { type OwnerContextValue, Owners } from "./owner-context.types";

const defaultValue: OwnerContextValue = {
  owner: Owners.All,
  setOwner: () => null,
};

export const OwnerContext = createContext<OwnerContextValue>(defaultValue);

export const useOwnerContext = () => useContext(OwnerContext);
