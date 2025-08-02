import {style} from '@vanilla-extract/css';
import {dropdownTitleTextStyle} from "./dropdown-title-text.css.ts";

export const dropdownSelectStyle = style([dropdownTitleTextStyle, {
    backgroundColor: 'initial',
border: 'none',
    color: '#A30000'
}]);