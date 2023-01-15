
// function component that displays a question and its answers,each answer being a button that calls the setAnswer function
// Path: components/QuestionCard.tsx
import { Box, Button, Text } from '@chakra-ui/react'
import exp from 'constants'
import { Question, QuestionEdge } from '../gql/graphql'

interface TProps {
    setAnswer: (answerId: string) => void
    // why the fuck does this not work?
    // question: QuestionEdge['node']
    // question: Question
    question: any 
}

const QuestionCard = ({question, setAnswer}: TProps) => {
    const q = question as Question
    return (
        <Box>
        <Text>{question.question}</Text>

        {question?.answers?.edges?.map(a => (
            a?.node ? (
            <Button key={a?.node.id} onClick={() => setAnswer(a?.node.id)}>{a?.node.text}</Button>
        ) : null))}
        </Box>
    )
}

export default QuestionCard;
