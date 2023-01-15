import { useQuery } from '@tanstack/react-query'
import { gqlClient } from '../gql/graphql-client'
import { getAllQuestions, getAllResponses, getAllUsers } from '../graphql-operations/questions'

export const useUsers = () => {
    const userQuery = useQuery({
        queryKey: ['users'],
        queryFn: async () => { return (await gqlClient.request( getAllUsers )).userCollection }
    })
    return { users: userQuery.data?.edges, ...userQuery }
}