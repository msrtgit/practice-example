import { combineReducers } from "@reduxjs/toolkit";
import common from "../features/common/slice";


const rootReducer = combineReducers({
  common,

});

export default rootReducer;
