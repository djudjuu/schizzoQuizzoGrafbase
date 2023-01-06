import { graphql } from "../gql/gql";

const getAllQuestions = graphql(/* GraphQL */`
query GetAllQuestions {
  questionCollection(first:100) {
    edges {
      node {
        id 
        question
        answers(first:100)	{
          edges {
            node {
              text
              id
            }
          }
        }
      }
    }
  }
}`)