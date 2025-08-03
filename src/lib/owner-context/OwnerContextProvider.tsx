import { type PropsWithChildren, useState } from "react";
import { type OwnerContextValue, Owners } from "./owner-context.types.ts";
import { OwnerContext } from "./use-owner-context.ts";

export const OwnerContextProvider = ({ children }: PropsWithChildren) => {
  const [owner, setOwner] = useState(Owners.All);

  const value: OwnerContextValue = {
    owner,
    setOwner,
  };

  return (
    <OwnerContext.Provider value={value}>{children}</OwnerContext.Provider>
  );
};
