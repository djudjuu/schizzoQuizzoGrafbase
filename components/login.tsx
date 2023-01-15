import { Flex, HStack, Box, Text } from "@chakra-ui/react";
import  Layout from "../components/Layout";
import { useUsers } from "../hooks/useData";


// function component that renders the login page
const Login = ({setPlayer}: {setPlayer: (user: {name: string, id: string}) => void}) => {
    const { users, isLoading, isError } = useUsers()

    if (isError) return <div>failed to load</div>
    if (isLoading) return <div>loading...</div>

    return (
        <Layout playerName="" setPlayer={setPlayer} >
        <Box>
            <Text>Wer bist du?</Text>
            <HStack>
                {users?.map((user) => (
                    user?.node &&
                    <Box key={user.node.id} onClick={() => setPlayer(user.node)}>
                        <Text>{user.node.name}</Text>
                        </Box>
                ))}
            </HStack>
        </Box>
        </Layout>
    )
}

export default Login;


