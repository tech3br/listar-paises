import { compose, createStore, Store } from "redux";
import { CountriesState } from "./countries/types";
import rootReducer from "./rootReducer";

export interface ApplicationState {
  countries: CountriesState
}

declare global { 
  interface Window { __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose; } 
} 

const composeEnhancers = (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()) || compose

const store: Store<ApplicationState> = createStore(rootReducer, composeEnhancers);

export default store;