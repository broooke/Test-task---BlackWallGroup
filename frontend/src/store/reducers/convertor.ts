import { createReducer } from "@reduxjs/toolkit";
import {DirectionCodes, IDirection, IFilter} from "../../types/convertor";
import {loadDirections, loadFilters, setFromSelectValue} from "../actions/convertor";

interface InitialState {
    filters: IFilter[]
    directions: IDirection[]
    fromSelectValue: DirectionCodes | null
}

const INITIAL_STATE: InitialState = {
    filters: [],
    directions: [],
    fromSelectValue: null,
}

export const convertorReducer = createReducer(INITIAL_STATE, ({addCase}) => {
    addCase(loadFilters.fulfilled, (state, action) => {
        state.filters = action.payload
    })
    addCase(loadDirections.fulfilled, (state, action) => {
        state.directions = action.payload
    })
    addCase(setFromSelectValue, (state, action) => {
        state.fromSelectValue = action.payload
    })
})