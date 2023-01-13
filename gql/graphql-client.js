import { GraphQLClient, gql } from 'graphql-request'

const ENDPOINT = process.env.NEXT_PUBLIC_GRAFBASE_ENDPOINT
const API_KEY = process.env.NEXT_PUBLIC_GRAFBASE_API_KEY

export const gqlClient = new GraphQLClient(ENDPOINT, {
    headers: {
        "Content-Type": "application/json",
        "x-api-key": API_KEY,
    },
  })