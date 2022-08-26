import { combineReducers } from "@reduxjs/toolkit";
import {convertorReducer} from "./convertor";

export const rootReducer = combineReducers({
    convertor: convertorReducer
})