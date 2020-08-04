import { Reducer } from "redux";
import { CountriesState, FILTER_BY_VALUE, GET_COUNTRY } from "./types";

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
    case FILTER_BY_VALUE:
      let value = action.payload;
      let filteredValues = state.data;
      return {
        ...state,
        countries: filteredValues,
      };
    default:
      return state;
  }
};

export default countryReducer;
