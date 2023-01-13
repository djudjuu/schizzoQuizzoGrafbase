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
import { useQuery } from '@tanstack/react-query'
import { gqlClient } from '../gql/graphql-client'
import { getAllQuestions } from '../graphql-operations/questions'
import { Question, QuestionEdge } from '../gql/graphql';

// const getFromStorage = (key: string) => {
//     if(typeof window !== 'undefined'){
//       return window.localStorage.getItem(key)
//     }
//     else {
//         return "";
//     }
// }

const getQuestions = async () => {
  return gqlClient.request( getAllQuestions )
}

export default function Home() {
  const {data: questions, isLoading, isError} = useQuery(
    { 
      queryKey: ['questions'], 
      // queryFn: async () => {return gqlClient.request( getAllQuestions )}
      queryFn: async () => {
        const {questionCollection} = await gqlClient.request( getAllQuestions )
        return questionCollection
      }
    }
  )
        
  // const qs = useQuery({ queryKey: ['questions'], queryFn: getQuestions })
  const [player, setPlayer] = useState("")
  const [puppet, setPuppet] = useState("")

  const setPlayerForGame = (player: string) => {
    setPlayer(player)
    setPuppet("")
  }

  if (!player) return <Login setPlayer={setPlayerForGame}/>
  if (!puppet) return <Game setPuppet={setPuppet} player={player}/>

  return (
    <Layout player={player} setPlayer={setPlayerForGame}>
      <Box>
        <Text>Hi {player}</Text>
        <Text>Beantworte diese Fragen so als waerest du {puppet}:</Text>
        {isLoading ? <div>Loading...</div> : null}
        {isError ? <div>Error</div> : null}
        { questions?.edges?.map(q => (
          q?.node ?  <div key={q?.node.id}>{q?.node.question}</div> : null
          ))
        }
      </Box>
    </Layout>
  )
}
