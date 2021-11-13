import ThemeReducer from "./ThemeReducer";
import InfosReducer from "./InfosReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({ThemeReducer,InfosReducer})

export default rootReducer;