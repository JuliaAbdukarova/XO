import { legacy_createStore as createStore } from "redux";
import appReducer from "./reducers/appReducer";

export const appStore = createStore(appReducer);
