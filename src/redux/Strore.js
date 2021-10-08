import { createStore } from "redux";
import { reducer } from "./Reducer";

export const configureStore = createStore(reducer);
