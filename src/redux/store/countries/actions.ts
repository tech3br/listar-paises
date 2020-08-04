import { Country, CountryActionTypes, CountryFilter, EDIT_COUNTRY, FILTER_BY_VALUE, GET_COUNTRY } from './types'

export function filterByName(name: CountryFilter): CountryActionTypes{
  return {
    type: FILTER_BY_VALUE,
    payload: name
  }
}


export function getCountry(data: Country): CountryActionTypes {
  return {
    type: GET_COUNTRY,
    payload: data
  }
}

export function editCountry(timestamp: number): CountryActionTypes {
  return {
    type: EDIT_COUNTRY,
    meta: {
      timestamp
    }
  }
}