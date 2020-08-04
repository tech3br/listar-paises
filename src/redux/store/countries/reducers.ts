import { Reducer } from "redux";
import { CountriesState, GET_COUNTRY } from "./types";

const INITIAL_STATE = {
  data: [],
  error: false,
  loading: false,
};

const countryReducer: Reducer<CountriesState> = (
  state = INITIAL_STATE,
  action
) => {
  switch (action.type) {
    case GET_COUNTRY:
      return {
        ...state,
        loading: false,
        error: false,
        data: action.payload,
      };
    default:
      return state;
  }
};

export default countryReducer;
