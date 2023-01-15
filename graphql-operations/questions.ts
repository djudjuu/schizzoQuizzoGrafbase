import { graphql } from "../gql/gql";

export const getAllQuestions = graphql(/* GraphQL */`
query GetAllQuestions {
  questionCollection(first:100) {
    edges {
      node {
        id 
        question
        createdAt
        updatedAt
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

export const addAnswer = graphql(/* GraphQL */`
mutation addAnswer ($questionId: ID!, $text: String!) {
  answerCreate(input: 
    {
    	question: {link: $questionId}
   	 text: $text
    }
  ) {
    answer {
      text
      question {
        question
      }
      id
    }
  }
}`)


export const getAllUsers = graphql(/* GraphQL */`
query getAllUsers {
  userCollection(first: 100) {
    edges {
      node {
        id
        name
      }
    }
  }
}`)

export const createResponse = graphql(/* GraphQL */`
mutation createResponse ($input: ResponseCreateInput! )
{
  responseCreate(input: $input) {
    response {
      id
    }
  }
}
`)

export const getAllResponses = graphql(/* GraphQL */`
query getAllResponses {
  responseCollection (first: 100) {
    edges {
      node {
        question {
          question
          id
        }
        answer {
          text
          id
        }
        player {
          name
          id
        }
        user {
          name
          id
        }
      }
    }
  }
} `)

// // export const createResponse = graphql(/* GraphQL */`

// // `)

// // export const createResponse = graphql(/* GraphQL */`

// // `)