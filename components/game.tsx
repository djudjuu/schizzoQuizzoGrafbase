import { Flex, HStack, Box, Text } from "@chakra-ui/react";
import router from "next/router";
import { usePlayer } from "../hooks/usePlayer";
import { useState } from "react";
import Layout from '../components/Layout';
import { useQuery } from "@tanstack/react-query";
import { useUsers } from "../hooks/useData";

interface User {
  name: string
  id: string
}

// component that renders a game page
const Game = ({player, setPuppet}: {player: User, setPuppet: (user: User) => void}) => {

    // map each player that is not the current player to a box that when clicked sets the puppet
    const { users, isError, isLoading } = useUsers()
    if (isError) return <div>failed to load</div>
    if (isLoading) return <div>loading...</div>

    return (
        <Layout setPlayer={undefined} playerName={player.name}>
        <Box>
            <Text>Als wer moechtest du spielen?</Text>
            <HStack>
                {
                users?.filter(x => x?.node.id !== player.id)
                    .map((user) => (
                    user?.node && (
                    <Box key={user.node.id} onClick={() => setPuppet(user.node)}>
                        <Text>{user.node.name}</Text> 
                    </Box>) 
                ))}
            </HStack>
        </Box>
        </Layout>
    )
}

export default Game;