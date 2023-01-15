/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel-plugin for production.
 */
const documents = {
    "\nquery GetAllQuestions {\n  questionCollection(first:100) {\n    edges {\n      node {\n        id \n        question\n        createdAt\n        updatedAt\n        answers(first:100)\t{\n          edges {\n            node {\n              text\n              id\n            }\n          }\n        }\n      }\n    }\n  }\n}": types.GetAllQuestionsDocument,
    "\nmutation addAnswer ($questionId: ID!, $text: String!) {\n  answerCreate(input: \n    {\n    \tquestion: {link: $questionId}\n   \t text: $text\n    }\n  ) {\n    answer {\n      text\n      question {\n        question\n      }\n      id\n    }\n  }\n}": types.AddAnswerDocument,
    "\nquery getAllUsers {\n  userCollection(first: 100) {\n    edges {\n      node {\n        id\n        name\n      }\n    }\n  }\n}": types.GetAllUsersDocument,
    "\nmutation createResponse ($input: ResponseCreateInput! )\n{\n  responseCreate(input: $input) {\n    response {\n      id\n    }\n  }\n}\n": types.CreateResponseDocument,
    "\nquery getAllResponses {\n  responseCollection (first: 100) {\n    edges {\n      node {\n        question {\n          question\n          id\n        }\n        answer {\n          text\n          id\n        }\n        player {\n          name\n          id\n        }\n        user {\n          name\n          id\n        }\n      }\n    }\n  }\n} ": types.GetAllResponsesDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\nquery GetAllQuestions {\n  questionCollection(first:100) {\n    edges {\n      node {\n        id \n        question\n        createdAt\n        updatedAt\n        answers(first:100)\t{\n          edges {\n            node {\n              text\n              id\n            }\n          }\n        }\n      }\n    }\n  }\n}"): (typeof documents)["\nquery GetAllQuestions {\n  questionCollection(first:100) {\n    edges {\n      node {\n        id \n        question\n        createdAt\n        updatedAt\n        answers(first:100)\t{\n          edges {\n            node {\n              text\n              id\n            }\n          }\n        }\n      }\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\nmutation addAnswer ($questionId: ID!, $text: String!) {\n  answerCreate(input: \n    {\n    \tquestion: {link: $questionId}\n   \t text: $text\n    }\n  ) {\n    answer {\n      text\n      question {\n        question\n      }\n      id\n    }\n  }\n}"): (typeof documents)["\nmutation addAnswer ($questionId: ID!, $text: String!) {\n  answerCreate(input: \n    {\n    \tquestion: {link: $questionId}\n   \t text: $text\n    }\n  ) {\n    answer {\n      text\n      question {\n        question\n      }\n      id\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\nquery getAllUsers {\n  userCollection(first: 100) {\n    edges {\n      node {\n        id\n        name\n      }\n    }\n  }\n}"): (typeof documents)["\nquery getAllUsers {\n  userCollection(first: 100) {\n    edges {\n      node {\n        id\n        name\n      }\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\nmutation createResponse ($input: ResponseCreateInput! )\n{\n  responseCreate(input: $input) {\n    response {\n      id\n    }\n  }\n}\n"): (typeof documents)["\nmutation createResponse ($input: ResponseCreateInput! )\n{\n  responseCreate(input: $input) {\n    response {\n      id\n    }\n  }\n}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\nquery getAllResponses {\n  responseCollection (first: 100) {\n    edges {\n      node {\n        question {\n          question\n          id\n        }\n        answer {\n          text\n          id\n        }\n        player {\n          name\n          id\n        }\n        user {\n          name\n          id\n        }\n      }\n    }\n  }\n} "): (typeof documents)["\nquery getAllResponses {\n  responseCollection (first: 100) {\n    edges {\n      node {\n        question {\n          question\n          id\n        }\n        answer {\n          text\n          id\n        }\n        player {\n          name\n          id\n        }\n        user {\n          name\n          id\n        }\n      }\n    }\n  }\n} "];

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
**/
export function graphql(source: string): unknown;

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;