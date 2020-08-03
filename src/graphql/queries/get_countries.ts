import { gql } from "@apollo/client";
import { client } from "../client";

interface Props {
  first: number;
  offset: number;
}

export const GET_COUNTRIES = client.query({
  query: gql`
    query GET_COUNTRIES($first: Int, $offset: Int) {
      Country(first: $first, offset: $offset) {
        _id
        name
        capital
        area
        population
        flag {
          svgFile
        }
        topLevelDomains {
          name
        }
      }
    }
  `,
  // variables: {
  //   first: 8,
  //   offset: 8,
  // },
},  );
