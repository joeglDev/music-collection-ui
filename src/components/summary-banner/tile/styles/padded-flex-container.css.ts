import { style } from '@vanilla-extract/css';
import {flexContainerStyle} from "../../../flex-container/FlexContainer.css.ts";

export const paddedFlexContainerStyle = style([flexContainerStyle, {
    flexDirection: 'column',
    margin: '1rem',
    padding: '1rem',
    backgroundColor: '#F5F5F5',
    fontSize: '1.75rem',
    fontWeight: '500'
}]);