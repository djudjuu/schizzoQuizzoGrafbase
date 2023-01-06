import { Flex, HStack, Box, Text } from "@chakra-ui/react";
import router from "next/router";
import { usePlayer } from "../hooks/usePlayer";
import { useState } from "react";
import Layout from '../components/Layout';
const DUMMY_PLAYERS ={data: {players: [{name: "julius", pw: "123"}, {name: "raio", pw: "321"}]}, error: false}

// component that renders a game page
const Game = ({player, setPuppet}: {player: string, setPuppet: any}) => {

    // map each player that is not the current player to a box that when clicked sets the puppet
    const { data: players, error } = DUMMY_PLAYERS
    if (error) return <div>failed to load</div>
    if (!players) return <div>loading...</div>
    return (
        <Layout>
        <Box>
            <Text>Als wer moechtest du spielen?</Text>
            <HStack>
                {players.players.filter(x => x.name !== player).map((player) => (
                    <Box key={player.name} onClick={() => setPuppet(player.name)}>
                        <Text>{player.name}</Text>
                    </Box>
                ))}
            </HStack>
        </Box>
        </Layout>
    )
}

export default Game;