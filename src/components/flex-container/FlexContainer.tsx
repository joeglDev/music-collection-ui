import type { PropsWithChildren } from "react";
import { flexContainerStyle } from "./FlexContainer.css.ts";

export const FlexContainer = ({ children }: PropsWithChildren) => (
  <div className={flexContainerStyle}>{children}</div>
);
