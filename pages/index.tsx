import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import { graphql } from '../gql'
import { usePlayer } from '../hooks/usePlayer'
import { Flex, HStack, Box, Text } from "@chakra-ui/react";
import { useRouter } from 'next/router';
import Login from '../components/login';
import Game from '../components/game';
import { useState, useEffect } from "react";
import Layout from '../components/Layout';
// import { useQuery } from '@tanstack/react-query"

const getAllQuestions = graphql(/* GraphQL */`
query {
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

const getFromStorage = (key: string) => {
    if(typeof window !== 'undefined'){
      return window.localStorage.getItem(key)
    }
    else {
        return "";
    }
}

export default function Home() {
  const [player, setPlayer] = useState(getFromStorage("player"))
  const [puppet, setPuppet] = useState("")

  const setPlayerForGame = (player: string) => {
    setPlayer(player)
    setPuppet("")
    localStorage.setItem("player", player)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      const fromStorage = getFromStorage("player")
      if (fromStorage !== player) {
        setPlayer(fromStorage)
      }
    }, 2000);
    return () => clearInterval(interval);
  }, [player]);

  
  if (!player) return <Login setPlayer={setPlayerForGame}/>
  if (!puppet) return <Game setPuppet={setPuppet} player={player}/>

  return (
    <Layout player={player}>
      <Box>
        <Text>Hi {player}</Text>
        <Text>Beantworte diese Fragen so als waerest du {puppet}:</Text>
        {/* <Questions player={player} puppet={puppet}/> */}
      </Box>
    </Layout>
  )
}
