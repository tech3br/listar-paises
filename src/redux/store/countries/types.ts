export const GET_COUNTRY = "GET_COUNTRY";
export const EDIT_COUNTRY = "EDIT_COUNTRY";

interface FlagCountry {
  _id: string;
  emoji: string;
  emojiUnicode: string;
  svgFile: string;
}

export interface Country {
  _id: string;
  name: string;
  capital: string;
  area: string;
  population: string;
  flag: FlagCountry;
  topLevelDomains: [{
    name: string;
  }];
}

export interface CountriesState {
  readonly data: Object;
  readonly loading: boolean;
  readonly error: boolean;
}

interface GetCountryAction {
  type: typeof GET_COUNTRY;
  payload: Country;
}

interface EditCountryAction {
  type: typeof EDIT_COUNTRY;
  meta: {
    timestamp: number;
  };
}

export type CountryActionTypes = GetCountryAction | EditCountryAction;
