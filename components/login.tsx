import { Flex, HStack, Box, Text } from "@chakra-ui/react";
import router from "next/router";

const DUMMY_PLAYERS ={ data: {players: [{name: "julius", pw: "123"}, {name: "raio", pw: "321"}]}, error: false}

// function component that renders the login page
const Login = ({setPlayer}: {setPlayer: any}) => {
    const { data: players, error } = DUMMY_PLAYERS
    if (error) return <div>failed to load</div>
    if (!players) return <div>loading...</div>
    return (
        <Box>
            <Text>Wer bist du?</Text>
            <HStack>
                {players.players.map((player) => (
                    <Box key={player.name} onClick={() => setPlayer(player.name)}>
                        <Text>{player.name}</Text>
                        </Box>
                ))}
            </HStack>
        </Box>
    )
}

export default Login;


