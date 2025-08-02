import {createContext, useContext} from "react";
import {type OwnerContextValue } from "./owner-context.types";

export const OwnerContext = createContext<OwnerContextValue | null>(null);

export const useOwnerContext = () => useContext(OwnerContext);