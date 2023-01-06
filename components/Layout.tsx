// Layout component for the app that has a header with a logout button and the name of the game on the left

import { Box, Flex, Text } from "@chakra-ui/react";
// import { useRouter } from 'next/router';
import { useState, useEffect } from "react";
// import { useQuery } from '@tanstack/react-query"
import { ReactNode } from "react";


const getFromStorage = (key: string) => {
    if(typeof window !== 'undefined'){
      return window.localStorage.getItem(key)
    }
    else {
        return "";
    }
}

const Layout = ({ children, player = "" } : {children: ReactNode, player?: string}) => {
    return (
        <Flex
            direction="column"
            height="100vh"
            width="100vw"
            alignItems="center"
            justifyContent="center"
        >
            <Flex

                direction="row"
                width="100%"
                height="10%"
                alignItems="center"
                justifyContent="space-between"
                padding="1rem"
            >
                <Text fontSize="2xl" fontWeight="bold">
                    SchizzoQuizzo
                </Text>
                {player && (
                    <Text fontSize="xl" fontWeight="bold" onClick={() => {
                        localStorage.removeItem("player")
                    }}>
                    Vergessen!
                </Text>
                )}
            </Flex>
            <Box

                width="100%"
                height="90%"
                alignItems="center"
                justifyContent="center"
            >
                <Flex 
                flexWrap="wrap" 
                alignItems="center" 
                justifyContent="center"
                >
                {children}
                </Flex>
            </Box>
        </Flex>
    )
}

export default Layout;
                