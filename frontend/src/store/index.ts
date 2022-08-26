import { configureStore } from "@reduxjs/toolkit";
import {rootReducer} from "./reducers";

export const store = configureStore({
    reducer: rootReducer
})

export type RootDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof rootReducer>;