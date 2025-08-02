import {Owners, useOwnerContext} from "../../../owner-context";
import {dropdownSelectStyle, dropdownTitleFlexStyle, dropdownTitleTextStyle} from "./styles";
import type {ChangeEvent} from "react";

export const OwnerDropDown = () => {
    const {setOwner} = useOwnerContext();

    const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
        if (e.target.value === Owners.All) {
            setOwner(Owners.All)
        } else if (e.target.value === Owners.Joe) {
            setOwner(Owners.Joe)
        } else if (e.target.value === Owners.Lvkas) {
            setOwner(Owners.Lvkas)
        } else {
            setOwner(Owners.Grandad)
        }
    }

    return (
        <div className={dropdownTitleFlexStyle}>
            <p className={dropdownTitleTextStyle}>The following music collection is owned by: </p>
            <select className={dropdownSelectStyle} name="select-collection-owner" defaultValue={Owners.All} onChange={(e) => onChange(e)}>
                <option value={Owners.All}>{Owners.All}</option>
                <option value={Owners.Joe}>{Owners.Joe}</option>
                <option value={Owners.Lvkas}>{Owners.Lvkas}</option>
                <option value={Owners.Grandad}>{Owners.Grandad}</option>
            </select>
        </div>
    )
}