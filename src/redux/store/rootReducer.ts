import { combineReducers } from "redux";
import countryReducer from "./countries/reducers";

const rootReducer = combineReducers({
  countries: countryReducer,
});

export default rootReducer;
