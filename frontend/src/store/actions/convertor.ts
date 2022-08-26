import {createAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import {DirectionCodes, IDirection, IFilter} from "../../types/convertor";

export const loadFilters = createAsyncThunk<IFilter[]>(
    'LOAD_FILTERS',
    async () => {
        const { data } = await axios.get<IFilter[]>('http://localhost:3000/filters')
        return data
    }
)

export const loadDirections = createAsyncThunk<IDirection[]>(
    'LOAD_DIRECTIONS',
    async () => {
        const { data } = await axios.get<IDirection[]>('http://localhost:3000/directions')
        return data
    }
)

export const setFromSelectValue = createAction<DirectionCodes>('SET_FROM_SELECT_VALUE')