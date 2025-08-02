import type {PropsWithChildren} from "react";
import {paddedFlexContainerStyle} from "./padded-flex-container.css.ts";

export const PaddedFlexContainer = ({children}: PropsWithChildren) => (
    <div className={paddedFlexContainerStyle}>
        {children}
    </div>
)