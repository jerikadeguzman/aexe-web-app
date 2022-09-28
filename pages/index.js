import Head from 'next/head'
import { Heading, Center, Flex, Button, Stack, HStack, VStack, Text, Input, Box, Image, Switch } from "@chakra-ui/react";
import { useEffect, useState, useContext } from "react";

export default function Home() {
  const [hidePassword, setHidePassword] = useState(true);
  const [email, setEmail]= useState("")
  const [password, setPassword] = useState("")

  return (
    <>
      <Head>
        <title>Index</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/aexelogo.png" />
      </Head>
      <Box
      bgImage={'/gymhd.jpg'}
      height="100vh"
      width="100vw"
      bgSize="cover"
      >
      <Flex 
      {...styleProps.indexWrapper}>
         <Center>
         <Flex flexDirection="column" {...styleProps.formWrapper}>
          <VStack
          paddingTop="1vh" 
          >
          <Image
            borderRadius='full'
            boxSize='100px'
            src='/aexelogo.png'
            alt='logo'
            marginBottom="3"
          />
          <Box>
          <Input
            shadow={"inner"}
            bg={"white"}
            color={"black"}
            width="20vw"
            placeholder={"Email/Username"}
            onChange={(event) => setEmail(event.target.value)}
          />     
          </Box>
          <Box> 
          <Input
              type={hidePassword ? "password" : "text"}
              shadow={"inner"}
              bg={"white"}
              color={"black"}
              width="20vw"
              placeholder={"Password"}
              onChange={(event) => setPassword(event.target.value)}
              />   
            </Box>
            <Box>
            <HStack
            marginTop={"20px"}
            width="20vw"
            justifyContent="center"
            spacing={20}>
                <Button colorScheme='red' width={"7vw"} alignSelf={"flex-start"}>Login</Button>  
                <Button colorScheme='red' width={"7vw"} alignSelf={"flex-end"}>Register</Button> 
            </HStack>
            </Box>   
          </VStack>
         </Flex>
         </Center>
      </Flex>
      </Box>
    </>
  )
}

const styleProps = {
  indexWrapper: {
    height: "100vh",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  formWrapper: {
    borderRadius: "xl",
    width: "54vh",
    height: "50vh",
    flexDirection: "column",
    alignItems: "center",
    padding: "2vh",
    color: "white",
    bgColor: "#E1CBA5",
    
    
  }
}
