import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import { Flex, HStack, Box, Text } from "@chakra-ui/react";
import Login from '../components/login';
import Game from '../components/game';
import { useState, useEffect } from "react";
import Layout from '../components/Layout';
import { useQuery } from '@tanstack/react-query'
import { gqlClient } from '../gql/graphql-client'
import { getAllQuestions, getAllResponses } from '../graphql-operations/questions'
import QuestionCard from '../components/QuestionCard'

interface User {
  name: string
  id: string
}

const emptyUser = {name: "", id: ""}

export default function Home() {
  const {data: questions, isLoading, isError} = useQuery(
    { 
      queryKey: ['questions'], 
      queryFn: async () => { return (await gqlClient.request( getAllQuestions )).questionCollection }
    }
  )

  // todo write as hook
  const {data: responses} = useQuery(
    { 
      queryKey: ['responses'], 
      queryFn: async () => { return (await gqlClient.request( getAllResponses )).responseCollection }
    }
  )
  
  const [player , setPlayer] = useState(emptyUser)
  const [puppet, setPuppet] = useState(emptyUser)

  const setPlayerForGame = (player: User) => {
    setPlayer(player)
    setPuppet(emptyUser)
  }

  if (!player.name) return <Login setPlayer={setPlayerForGame}/>
  if (!puppet.name) return <Game setPuppet={setPuppet} player={player}/>

  const setAnswer = (answerId: string) => {
    console.log("setAnswer", answerId)
  }

  return (
    <Layout playerName={player.name} setPlayer={setPlayerForGame}>
      <Box>
        <Text>Hi {player.name}</Text>
        <Text>Beantworte diese Fragen so als waerest du {puppet.name}:</Text>
        {isLoading ? <div>Loading...</div> : null}
        {isError ? <div>Error</div> : null}
        { questions?.edges?.map(q => (
          q?.node ?  (
            <div key={q?.node.id}>
              <QuestionCard 
              question={q?.node} 
              setAnswer={setAnswer} /> 
            </div> 
          ) : null
        ))
        }
      </Box>
    </Layout>
  )
}
