/* eslint-disable */
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /**
   * A date-time string at UTC, such as 2007-12-03T10:15:30Z, is compliant with the date-time format outlined in section 5.6 of the RFC 3339
   * profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar.
   *
   * This scalar is a description of an exact instant on the timeline such as the instant that a user account was created.
   *
   * # Input Coercion
   *
   * When expected as an input type, only RFC 3339 compliant date-time strings are accepted. All other input values raise a query error indicating an incorrect type.
   *
   * # Result Coercion
   *
   * Where an RFC 3339 compliant date-time string has a time-zone other than UTC, it is shifted to UTC.
   * For example, the date-time string 2016-01-01T14:10:20+01:00 is shifted to 2016-01-01T13:10:20Z.
   */
  DateTime: any;
};

export type Answer = {
  __typename?: 'Answer';
  /** when the model was created */
  createdAt: Scalars['DateTime'];
  /** Unique identifier */
  id: Scalars['ID'];
  question: Question;
  text: Scalars['String'];
  /** when the model was updated */
  updatedAt: Scalars['DateTime'];
};

/** Input to create a Question for the AnswerRelateQuestion relation of Answer */
export type AnswerAnswerRelateQuestionQuestionCreateInput = {
  answers: Array<QuestionAnswerRelateQuestionAnswerCreateRelationInput>;
  createdBy?: InputMaybe<QuestionQuestionRelateUserUserCreateRelationInput>;
  question: Scalars['String'];
};

/** Input to link to or create a Question for the AnswerRelateQuestion relation of Answer */
export type AnswerAnswerRelateQuestionQuestionCreateRelationInput = {
  create?: InputMaybe<AnswerAnswerRelateQuestionQuestionCreateInput>;
  link?: InputMaybe<Scalars['ID']>;
};

/** Input to link/unlink to or create a Question for the AnswerRelateQuestion relation of Answer */
export type AnswerAnswerRelateQuestionQuestionUpdateRelationInput = {
  create?: InputMaybe<AnswerAnswerRelateQuestionQuestionCreateInput>;
  link?: InputMaybe<Scalars['ID']>;
  unlink?: InputMaybe<Scalars['ID']>;
};

export type AnswerByInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export type AnswerConnection = {
  __typename?: 'AnswerConnection';
  edges?: Maybe<Array<Maybe<AnswerEdge>>>;
  /** Information to aid in pagination */
  pageInfo: PageInfo;
};

/** Input to create a Answer */
export type AnswerCreateInput = {
  question: AnswerAnswerRelateQuestionQuestionCreateRelationInput;
  text: Scalars['String'];
};

export type AnswerCreatePayload = {
  __typename?: 'AnswerCreatePayload';
  answer?: Maybe<Answer>;
};

export type AnswerDeletePayload = {
  __typename?: 'AnswerDeletePayload';
  deletedId: Scalars['ID'];
};

export type AnswerEdge = {
  __typename?: 'AnswerEdge';
  cursor: Scalars['String'];
  node: Answer;
};

/** Input to update a Answer */
export type AnswerUpdateInput = {
  question?: InputMaybe<AnswerAnswerRelateQuestionQuestionUpdateRelationInput>;
  text?: InputMaybe<Scalars['String']>;
};

export type AnswerUpdatePayload = {
  __typename?: 'AnswerUpdatePayload';
  answer?: Maybe<Answer>;
};

export type Group = {
  __typename?: 'Group';
  /** when the model was created */
  createdAt: Scalars['DateTime'];
  /** Unique identifier */
  id: Scalars['ID'];
  name: Scalars['String'];
  /** when the model was updated */
  updatedAt: Scalars['DateTime'];
  users?: Maybe<UserConnection>;
};


export type GroupUsersArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};

export type GroupByInput = {
  id?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
};

export type GroupConnection = {
  __typename?: 'GroupConnection';
  edges?: Maybe<Array<Maybe<GroupEdge>>>;
  /** Information to aid in pagination */
  pageInfo: PageInfo;
};

/** Input to create a Group */
export type GroupCreateInput = {
  name: Scalars['String'];
  users?: InputMaybe<Array<InputMaybe<GroupGroupRelateUserUserCreateRelationInput>>>;
};

export type GroupCreatePayload = {
  __typename?: 'GroupCreatePayload';
  group?: Maybe<Group>;
};

export type GroupDeletePayload = {
  __typename?: 'GroupDeletePayload';
  deletedId: Scalars['ID'];
};

export type GroupEdge = {
  __typename?: 'GroupEdge';
  cursor: Scalars['String'];
  node: Group;
};

/** Input to create a User for the GroupRelateUser relation of Group */
export type GroupGroupRelateUserUserCreateInput = {
  email?: InputMaybe<Scalars['String']>;
  groups?: InputMaybe<Array<InputMaybe<UserGroupRelateUserGroupCreateRelationInput>>>;
  name: Scalars['String'];
  password: Scalars['String'];
  responses?: InputMaybe<Array<InputMaybe<UserResponseRelateUserResponseCreateRelationInput>>>;
};

/** Input to link to or create a User for the GroupRelateUser relation of Group */
export type GroupGroupRelateUserUserCreateRelationInput = {
  create?: InputMaybe<GroupGroupRelateUserUserCreateInput>;
  link?: InputMaybe<Scalars['ID']>;
};

/** Input to link/unlink to or create a User for the GroupRelateUser relation of Group */
export type GroupGroupRelateUserUserUpdateRelationInput = {
  create?: InputMaybe<GroupGroupRelateUserUserCreateInput>;
  link?: InputMaybe<Scalars['ID']>;
  unlink?: InputMaybe<Scalars['ID']>;
};

/** Input to update a Group */
export type GroupUpdateInput = {
  name?: InputMaybe<Scalars['String']>;
  users?: InputMaybe<Array<InputMaybe<GroupGroupRelateUserUserUpdateRelationInput>>>;
};

export type GroupUpdatePayload = {
  __typename?: 'GroupUpdatePayload';
  group?: Maybe<Group>;
};

/** Possible operations for an Int field */
export type IntOperationsInput = {
  decrement?: InputMaybe<Scalars['Int']>;
  increment?: InputMaybe<Scalars['Int']>;
  set?: InputMaybe<Scalars['Int']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Create a Answer */
  answerCreate?: Maybe<AnswerCreatePayload>;
  /** Delete a Answer by ID or unique field */
  answerDelete?: Maybe<AnswerDeletePayload>;
  /** Update a Answer */
  answerUpdate?: Maybe<AnswerUpdatePayload>;
  /** Create a Group */
  groupCreate?: Maybe<GroupCreatePayload>;
  /** Delete a Group by ID or unique field */
  groupDelete?: Maybe<GroupDeletePayload>;
  /** Update a Group */
  groupUpdate?: Maybe<GroupUpdatePayload>;
  /** Create a Question */
  questionCreate?: Maybe<QuestionCreatePayload>;
  /** Delete a Question by ID or unique field */
  questionDelete?: Maybe<QuestionDeletePayload>;
  /** Update a Question */
  questionUpdate?: Maybe<QuestionUpdatePayload>;
  /** Create a QuizSession */
  quizSessionCreate?: Maybe<QuizSessionCreatePayload>;
  /** Delete a QuizSession by ID or unique field */
  quizSessionDelete?: Maybe<QuizSessionDeletePayload>;
  /** Update a QuizSession */
  quizSessionUpdate?: Maybe<QuizSessionUpdatePayload>;
  /** Create a Response */
  responseCreate?: Maybe<ResponseCreatePayload>;
  /** Delete a Response by ID or unique field */
  responseDelete?: Maybe<ResponseDeletePayload>;
  /** Update a Response */
  responseUpdate?: Maybe<ResponseUpdatePayload>;
  /** Create a User */
  userCreate?: Maybe<UserCreatePayload>;
  /** Delete a User by ID or unique field */
  userDelete?: Maybe<UserDeletePayload>;
  /** Update a User */
  userUpdate?: Maybe<UserUpdatePayload>;
};


export type MutationAnswerCreateArgs = {
  input: AnswerCreateInput;
};


export type MutationAnswerDeleteArgs = {
  by: AnswerByInput;
};


export type MutationAnswerUpdateArgs = {
  by: AnswerByInput;
  input: AnswerUpdateInput;
};


export type MutationGroupCreateArgs = {
  input: GroupCreateInput;
};


export type MutationGroupDeleteArgs = {
  by: GroupByInput;
};


export type MutationGroupUpdateArgs = {
  by: GroupByInput;
  input: GroupUpdateInput;
};


export type MutationQuestionCreateArgs = {
  input: QuestionCreateInput;
};


export type MutationQuestionDeleteArgs = {
  by: QuestionByInput;
};


export type MutationQuestionUpdateArgs = {
  by: QuestionByInput;
  input: QuestionUpdateInput;
};


export type MutationQuizSessionCreateArgs = {
  input: QuizSessionCreateInput;
};


export type MutationQuizSessionDeleteArgs = {
  by: QuizSessionByInput;
};


export type MutationQuizSessionUpdateArgs = {
  by: QuizSessionByInput;
  input: QuizSessionUpdateInput;
};


export type MutationResponseCreateArgs = {
  input: ResponseCreateInput;
};


export type MutationResponseDeleteArgs = {
  by: ResponseByInput;
};


export type MutationResponseUpdateArgs = {
  by: ResponseByInput;
  input: ResponseUpdateInput;
};


export type MutationUserCreateArgs = {
  input: UserCreateInput;
};


export type MutationUserDeleteArgs = {
  by: UserByInput;
};


export type MutationUserUpdateArgs = {
  by: UserByInput;
  input: UserUpdateInput;
};

export type PageInfo = {
  __typename?: 'PageInfo';
  endCursor?: Maybe<Scalars['String']>;
  hasNextPage: Scalars['Boolean'];
  hasPreviousPage: Scalars['Boolean'];
  startCursor?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  /** Query a single Answer by an ID or a unique field */
  answer?: Maybe<Answer>;
  /** Paginated query to fetch the whole list of `Answer`. */
  answerCollection?: Maybe<AnswerConnection>;
  /** Query a single Group by an ID or a unique field */
  group?: Maybe<Group>;
  /** Paginated query to fetch the whole list of `Group`. */
  groupCollection?: Maybe<GroupConnection>;
  /** Query a single Question by an ID or a unique field */
  question?: Maybe<Question>;
  /** Paginated query to fetch the whole list of `Question`. */
  questionCollection?: Maybe<QuestionConnection>;
  /** Query a single QuizSession by an ID or a unique field */
  quizSession?: Maybe<QuizSession>;
  /** Paginated query to fetch the whole list of `QuizSession`. */
  quizSessionCollection?: Maybe<QuizSessionConnection>;
  /** Query a single Response by an ID or a unique field */
  response?: Maybe<Response>;
  /** Paginated query to fetch the whole list of `Response`. */
  responseCollection?: Maybe<ResponseConnection>;
  /** Query a single User by an ID or a unique field */
  user?: Maybe<User>;
  /** Paginated query to fetch the whole list of `User`. */
  userCollection?: Maybe<UserConnection>;
};


export type QueryAnswerArgs = {
  by: AnswerByInput;
};


export type QueryAnswerCollectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type QueryGroupArgs = {
  by: GroupByInput;
};


export type QueryGroupCollectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type QueryQuestionArgs = {
  by: QuestionByInput;
};


export type QueryQuestionCollectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type QueryQuizSessionArgs = {
  by: QuizSessionByInput;
};


export type QueryQuizSessionCollectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type QueryResponseArgs = {
  by: ResponseByInput;
};


export type QueryResponseCollectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type QueryUserArgs = {
  by: UserByInput;
};


export type QueryUserCollectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};

export type Question = {
  __typename?: 'Question';
  answers?: Maybe<AnswerConnection>;
  /** when the model was created */
  createdAt: Scalars['DateTime'];
  createdBy?: Maybe<User>;
  /** Unique identifier */
  id: Scalars['ID'];
  question: Scalars['String'];
  /** when the model was updated */
  updatedAt: Scalars['DateTime'];
};


export type QuestionAnswersArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};

/** Input to create a Answer for the AnswerRelateQuestion relation of Question */
export type QuestionAnswerRelateQuestionAnswerCreateInput = {
  text: Scalars['String'];
};

/** Input to link to or create a Answer for the AnswerRelateQuestion relation of Question */
export type QuestionAnswerRelateQuestionAnswerCreateRelationInput = {
  create?: InputMaybe<QuestionAnswerRelateQuestionAnswerCreateInput>;
  link?: InputMaybe<Scalars['ID']>;
};

/** Input to link/unlink to or create a Answer for the AnswerRelateQuestion relation of Question */
export type QuestionAnswerRelateQuestionAnswerUpdateRelationInput = {
  create?: InputMaybe<QuestionAnswerRelateQuestionAnswerCreateInput>;
  link?: InputMaybe<Scalars['ID']>;
  unlink?: InputMaybe<Scalars['ID']>;
};

export type QuestionByInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export type QuestionConnection = {
  __typename?: 'QuestionConnection';
  edges?: Maybe<Array<Maybe<QuestionEdge>>>;
  /** Information to aid in pagination */
  pageInfo: PageInfo;
};

/** Input to create a Question */
export type QuestionCreateInput = {
  answers: Array<QuestionAnswerRelateQuestionAnswerCreateRelationInput>;
  createdBy?: InputMaybe<QuestionQuestionRelateUserUserCreateRelationInput>;
  question: Scalars['String'];
};

export type QuestionCreatePayload = {
  __typename?: 'QuestionCreatePayload';
  question?: Maybe<Question>;
};

export type QuestionDeletePayload = {
  __typename?: 'QuestionDeletePayload';
  deletedId: Scalars['ID'];
};

export type QuestionEdge = {
  __typename?: 'QuestionEdge';
  cursor: Scalars['String'];
  node: Question;
};

/** Input to create a User for the QuestionRelateUser relation of Question */
export type QuestionQuestionRelateUserUserCreateInput = {
  email?: InputMaybe<Scalars['String']>;
  groups?: InputMaybe<Array<InputMaybe<UserGroupRelateUserGroupCreateRelationInput>>>;
  name: Scalars['String'];
  password: Scalars['String'];
  responses?: InputMaybe<Array<InputMaybe<UserResponseRelateUserResponseCreateRelationInput>>>;
};

/** Input to link to or create a User for the QuestionRelateUser relation of Question */
export type QuestionQuestionRelateUserUserCreateRelationInput = {
  create?: InputMaybe<QuestionQuestionRelateUserUserCreateInput>;
  link?: InputMaybe<Scalars['ID']>;
};

/** Input to link/unlink to or create a User for the QuestionRelateUser relation of Question */
export type QuestionQuestionRelateUserUserUpdateRelationInput = {
  create?: InputMaybe<QuestionQuestionRelateUserUserCreateInput>;
  link?: InputMaybe<Scalars['ID']>;
  unlink?: InputMaybe<Scalars['ID']>;
};

/** Input to update a Question */
export type QuestionUpdateInput = {
  answers?: InputMaybe<Array<QuestionAnswerRelateQuestionAnswerUpdateRelationInput>>;
  createdBy?: InputMaybe<QuestionQuestionRelateUserUserUpdateRelationInput>;
  question?: InputMaybe<Scalars['String']>;
};

export type QuestionUpdatePayload = {
  __typename?: 'QuestionUpdatePayload';
  question?: Maybe<Question>;
};

export type QuizSession = {
  __typename?: 'QuizSession';
  /** when the model was created */
  createdAt: Scalars['DateTime'];
  /** Unique identifier */
  id: Scalars['ID'];
  playerID: User;
  score?: Maybe<Scalars['Int']>;
  /** when the model was updated */
  updatedAt: Scalars['DateTime'];
  user: User;
};

export type QuizSessionByInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export type QuizSessionConnection = {
  __typename?: 'QuizSessionConnection';
  edges?: Maybe<Array<Maybe<QuizSessionEdge>>>;
  /** Information to aid in pagination */
  pageInfo: PageInfo;
};

/** Input to create a QuizSession */
export type QuizSessionCreateInput = {
  playerID: QuizSessionPlayerQuizSessionUserCreateRelationInput;
  score?: InputMaybe<Scalars['Int']>;
  user: QuizSessionUserQuizSessionUserCreateRelationInput;
};

export type QuizSessionCreatePayload = {
  __typename?: 'QuizSessionCreatePayload';
  quizSession?: Maybe<QuizSession>;
};

export type QuizSessionDeletePayload = {
  __typename?: 'QuizSessionDeletePayload';
  deletedId: Scalars['ID'];
};

export type QuizSessionEdge = {
  __typename?: 'QuizSessionEdge';
  cursor: Scalars['String'];
  node: QuizSession;
};

/** Input to create a User for the PlayerQuizSession relation of QuizSession */
export type QuizSessionPlayerQuizSessionUserCreateInput = {
  email?: InputMaybe<Scalars['String']>;
  groups?: InputMaybe<Array<InputMaybe<UserGroupRelateUserGroupCreateRelationInput>>>;
  name: Scalars['String'];
  password: Scalars['String'];
  responses?: InputMaybe<Array<InputMaybe<UserResponseRelateUserResponseCreateRelationInput>>>;
};

/** Input to link to or create a User for the PlayerQuizSession relation of QuizSession */
export type QuizSessionPlayerQuizSessionUserCreateRelationInput = {
  create?: InputMaybe<QuizSessionPlayerQuizSessionUserCreateInput>;
  link?: InputMaybe<Scalars['ID']>;
};

/** Input to link/unlink to or create a User for the PlayerQuizSession relation of QuizSession */
export type QuizSessionPlayerQuizSessionUserUpdateRelationInput = {
  create?: InputMaybe<QuizSessionPlayerQuizSessionUserCreateInput>;
  link?: InputMaybe<Scalars['ID']>;
  unlink?: InputMaybe<Scalars['ID']>;
};

/** Input to update a QuizSession */
export type QuizSessionUpdateInput = {
  playerID?: InputMaybe<QuizSessionPlayerQuizSessionUserUpdateRelationInput>;
  score?: InputMaybe<IntOperationsInput>;
  user?: InputMaybe<QuizSessionUserQuizSessionUserUpdateRelationInput>;
};

export type QuizSessionUpdatePayload = {
  __typename?: 'QuizSessionUpdatePayload';
  quizSession?: Maybe<QuizSession>;
};

/** Input to create a User for the UserQuizSession relation of QuizSession */
export type QuizSessionUserQuizSessionUserCreateInput = {
  email?: InputMaybe<Scalars['String']>;
  groups?: InputMaybe<Array<InputMaybe<UserGroupRelateUserGroupCreateRelationInput>>>;
  name: Scalars['String'];
  password: Scalars['String'];
  responses?: InputMaybe<Array<InputMaybe<UserResponseRelateUserResponseCreateRelationInput>>>;
};

/** Input to link to or create a User for the UserQuizSession relation of QuizSession */
export type QuizSessionUserQuizSessionUserCreateRelationInput = {
  create?: InputMaybe<QuizSessionUserQuizSessionUserCreateInput>;
  link?: InputMaybe<Scalars['ID']>;
};

/** Input to link/unlink to or create a User for the UserQuizSession relation of QuizSession */
export type QuizSessionUserQuizSessionUserUpdateRelationInput = {
  create?: InputMaybe<QuizSessionUserQuizSessionUserCreateInput>;
  link?: InputMaybe<Scalars['ID']>;
  unlink?: InputMaybe<Scalars['ID']>;
};

export type Response = {
  __typename?: 'Response';
  answer?: Maybe<Answer>;
  /** when the model was created */
  createdAt: Scalars['DateTime'];
  /** Unique identifier */
  id: Scalars['ID'];
  playerId: Scalars['ID'];
  question: Question;
  /** when the model was updated */
  updatedAt: Scalars['DateTime'];
  user?: Maybe<User>;
};

/** Input to create a Answer for the AnswerRelateResponse relation of Response */
export type ResponseAnswerRelateResponseAnswerCreateInput = {
  question: AnswerAnswerRelateQuestionQuestionCreateRelationInput;
  text: Scalars['String'];
};

/** Input to link to or create a Answer for the AnswerRelateResponse relation of Response */
export type ResponseAnswerRelateResponseAnswerCreateRelationInput = {
  create?: InputMaybe<ResponseAnswerRelateResponseAnswerCreateInput>;
  link?: InputMaybe<Scalars['ID']>;
};

/** Input to link/unlink to or create a Answer for the AnswerRelateResponse relation of Response */
export type ResponseAnswerRelateResponseAnswerUpdateRelationInput = {
  create?: InputMaybe<ResponseAnswerRelateResponseAnswerCreateInput>;
  link?: InputMaybe<Scalars['ID']>;
  unlink?: InputMaybe<Scalars['ID']>;
};

export type ResponseByInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export type ResponseConnection = {
  __typename?: 'ResponseConnection';
  edges?: Maybe<Array<Maybe<ResponseEdge>>>;
  /** Information to aid in pagination */
  pageInfo: PageInfo;
};

/** Input to create a Response */
export type ResponseCreateInput = {
  answer?: InputMaybe<ResponseAnswerRelateResponseAnswerCreateRelationInput>;
  playerId: Scalars['ID'];
  question: ResponseQuestionRelateResponseQuestionCreateRelationInput;
  user?: InputMaybe<ResponseResponseRelateUserUserCreateRelationInput>;
};

export type ResponseCreatePayload = {
  __typename?: 'ResponseCreatePayload';
  response?: Maybe<Response>;
};

export type ResponseDeletePayload = {
  __typename?: 'ResponseDeletePayload';
  deletedId: Scalars['ID'];
};

export type ResponseEdge = {
  __typename?: 'ResponseEdge';
  cursor: Scalars['String'];
  node: Response;
};

/** Input to create a Question for the QuestionRelateResponse relation of Response */
export type ResponseQuestionRelateResponseQuestionCreateInput = {
  answers: Array<QuestionAnswerRelateQuestionAnswerCreateRelationInput>;
  createdBy?: InputMaybe<QuestionQuestionRelateUserUserCreateRelationInput>;
  question: Scalars['String'];
};

/** Input to link to or create a Question for the QuestionRelateResponse relation of Response */
export type ResponseQuestionRelateResponseQuestionCreateRelationInput = {
  create?: InputMaybe<ResponseQuestionRelateResponseQuestionCreateInput>;
  link?: InputMaybe<Scalars['ID']>;
};

/** Input to link/unlink to or create a Question for the QuestionRelateResponse relation of Response */
export type ResponseQuestionRelateResponseQuestionUpdateRelationInput = {
  create?: InputMaybe<ResponseQuestionRelateResponseQuestionCreateInput>;
  link?: InputMaybe<Scalars['ID']>;
  unlink?: InputMaybe<Scalars['ID']>;
};

/** Input to create a User for the ResponseRelateUser relation of Response */
export type ResponseResponseRelateUserUserCreateInput = {
  email?: InputMaybe<Scalars['String']>;
  groups?: InputMaybe<Array<InputMaybe<UserGroupRelateUserGroupCreateRelationInput>>>;
  name: Scalars['String'];
  password: Scalars['String'];
  responses?: InputMaybe<Array<InputMaybe<UserResponseRelateUserResponseCreateRelationInput>>>;
};

/** Input to link to or create a User for the ResponseRelateUser relation of Response */
export type ResponseResponseRelateUserUserCreateRelationInput = {
  create?: InputMaybe<ResponseResponseRelateUserUserCreateInput>;
  link?: InputMaybe<Scalars['ID']>;
};

/** Input to link/unlink to or create a User for the ResponseRelateUser relation of Response */
export type ResponseResponseRelateUserUserUpdateRelationInput = {
  create?: InputMaybe<ResponseResponseRelateUserUserCreateInput>;
  link?: InputMaybe<Scalars['ID']>;
  unlink?: InputMaybe<Scalars['ID']>;
};

/** Input to update a Response */
export type ResponseUpdateInput = {
  answer?: InputMaybe<ResponseAnswerRelateResponseAnswerUpdateRelationInput>;
  playerId?: InputMaybe<Scalars['ID']>;
  question?: InputMaybe<ResponseQuestionRelateResponseQuestionUpdateRelationInput>;
  user?: InputMaybe<ResponseResponseRelateUserUserUpdateRelationInput>;
};

export type ResponseUpdatePayload = {
  __typename?: 'ResponseUpdatePayload';
  response?: Maybe<Response>;
};

export type User = {
  __typename?: 'User';
  /** when the model was created */
  createdAt: Scalars['DateTime'];
  email?: Maybe<Scalars['String']>;
  groups?: Maybe<GroupConnection>;
  /** Unique identifier */
  id: Scalars['ID'];
  name: Scalars['String'];
  password: Scalars['String'];
  responses?: Maybe<ResponseConnection>;
  /** when the model was updated */
  updatedAt: Scalars['DateTime'];
};


export type UserGroupsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type UserResponsesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};

export type UserByInput = {
  id?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
};

export type UserConnection = {
  __typename?: 'UserConnection';
  edges?: Maybe<Array<Maybe<UserEdge>>>;
  /** Information to aid in pagination */
  pageInfo: PageInfo;
};

/** Input to create a User */
export type UserCreateInput = {
  email?: InputMaybe<Scalars['String']>;
  groups?: InputMaybe<Array<InputMaybe<UserGroupRelateUserGroupCreateRelationInput>>>;
  name: Scalars['String'];
  password: Scalars['String'];
  responses?: InputMaybe<Array<InputMaybe<UserResponseRelateUserResponseCreateRelationInput>>>;
};

export type UserCreatePayload = {
  __typename?: 'UserCreatePayload';
  user?: Maybe<User>;
};

export type UserDeletePayload = {
  __typename?: 'UserDeletePayload';
  deletedId: Scalars['ID'];
};

export type UserEdge = {
  __typename?: 'UserEdge';
  cursor: Scalars['String'];
  node: User;
};

/** Input to create a Group for the GroupRelateUser relation of User */
export type UserGroupRelateUserGroupCreateInput = {
  name: Scalars['String'];
  users?: InputMaybe<Array<InputMaybe<GroupGroupRelateUserUserCreateRelationInput>>>;
};

/** Input to link to or create a Group for the GroupRelateUser relation of User */
export type UserGroupRelateUserGroupCreateRelationInput = {
  create?: InputMaybe<UserGroupRelateUserGroupCreateInput>;
  link?: InputMaybe<Scalars['ID']>;
};

/** Input to link/unlink to or create a Group for the GroupRelateUser relation of User */
export type UserGroupRelateUserGroupUpdateRelationInput = {
  create?: InputMaybe<UserGroupRelateUserGroupCreateInput>;
  link?: InputMaybe<Scalars['ID']>;
  unlink?: InputMaybe<Scalars['ID']>;
};

/** Input to create a Response for the ResponseRelateUser relation of User */
export type UserResponseRelateUserResponseCreateInput = {
  answer?: InputMaybe<ResponseAnswerRelateResponseAnswerCreateRelationInput>;
  playerId: Scalars['ID'];
  question: ResponseQuestionRelateResponseQuestionCreateRelationInput;
};

/** Input to link to or create a Response for the ResponseRelateUser relation of User */
export type UserResponseRelateUserResponseCreateRelationInput = {
  create?: InputMaybe<UserResponseRelateUserResponseCreateInput>;
  link?: InputMaybe<Scalars['ID']>;
};

/** Input to link/unlink to or create a Response for the ResponseRelateUser relation of User */
export type UserResponseRelateUserResponseUpdateRelationInput = {
  create?: InputMaybe<UserResponseRelateUserResponseCreateInput>;
  link?: InputMaybe<Scalars['ID']>;
  unlink?: InputMaybe<Scalars['ID']>;
};

/** Input to update a User */
export type UserUpdateInput = {
  email?: InputMaybe<Scalars['String']>;
  groups?: InputMaybe<Array<InputMaybe<UserGroupRelateUserGroupUpdateRelationInput>>>;
  name?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  responses?: InputMaybe<Array<InputMaybe<UserResponseRelateUserResponseUpdateRelationInput>>>;
};

export type UserUpdatePayload = {
  __typename?: 'UserUpdatePayload';
  user?: Maybe<User>;
};
