import { legacy_createStore as createStore } from "redux";
import { appReducer } from "./reducer/appReducer";

export const appStore = createStore(appReducer);
