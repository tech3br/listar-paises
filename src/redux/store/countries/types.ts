export const GET_COUNTRY = "GET_COUNTRY";
export const EDIT_COUNTRY = "EDIT_COUNTRY";
export const FILTER_BY_VALUE = "FILTER_BY_VALUE";

interface FlagCountry {
  _id: string;
  emoji: string;
  emojiUnicode: string;
  svgFile?: string;
}

export interface Country {
  _id?: number;
  name: string;
  capital: string;
  area: string;
  population: string;
  flag?: FlagCountry;
  topLevelDomains: {
    name: string;
  }[];
}

export interface CountriesState {
  readonly data: Object;
  readonly loading: boolean;
  readonly error: boolean;
}

export interface CountryFilter {
  name: string;  
}

export interface CountriesStateFilter {
  readonly data: Object;
}

interface GetCountryAction {
  type: typeof GET_COUNTRY;
  payload: Country;
}

interface FilterByNameAction {
  type: typeof FILTER_BY_VALUE;
  payload: CountryFilter;
}

interface EditCountryAction {
  type: typeof EDIT_COUNTRY;
  meta: {
    timestamp: number;
  };
}

export type CountryActionTypes = GetCountryAction | EditCountryAction | FilterByNameAction;
