import { Country, CountryActionTypes, EDIT_COUNTRY, GET_COUNTRY } from './types'

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