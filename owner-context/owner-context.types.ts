import {type Dispatch, type SetStateAction} from "react";

export enum Owners {
    Joe = 'Joe',
    Lvkas = 'Lvkas',
    Grandad  = 'Grandad',
    All = 'All'
}

export interface OwnerContextValue {
    owner: Owners;
    setOwner: Dispatch<SetStateAction<Owners>>
}