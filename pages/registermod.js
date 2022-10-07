import Head from 'next/head'
import { Heading, Center, Flex, Button, Stack, HStack, VStack, Text, Input, InputGroup, InputRightElement, Box, Image, Select, Theme, Switch, IconButton, useDisclosure, Container, ChakraProvider, FormControl, FormLabel, InputLeftAddon, ModalCloseButton } from "@chakra-ui/react";
import { useEffect, useState, useContext } from "react";
//import Router from 'react';
import Router from 'next/router';
import { CloseButton } from '@chakra-ui/react'

export default function registermod() {
    const [input, setInput] = useState('')
    const [email, setEmail]= useState("")
    const [password, setPassword] = useState("")
    const [show, setShow] = useState(false)

   
    return (
        <>
          <Head>
            <title>Index</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/aexelogo.png" />
          </Head>
        


          
          <ChakraProvider theme={Theme}> 
    
                 <Container>
                 <Stack direction='row' spacing={126} margin='right'>
                    <Flex> 
                        <CloseButton size='lg'  />
                    </Flex>
                 
                </Stack>
                    <Box borderwidth="1px" borderRadius="lg" p={4} align="center" mt={3}>
                        <Image
                            borderRadius='full'
                            boxSize='100px'
                            src='/aexelogo.png'
                            alt='logo'
                            marginBottom="3"/>
                        <Text fontSize="26" align="center" fontStyle='bold'>Create an Account</Text>

                    <FormControl isRequired>
                        <Stack spacing={3}> 
                        <FormLabel>First Name</FormLabel>
                            <Input placeholder='First Name'/>

                            <FormLabel>Last Name</FormLabel>
                            <Input placeholder='Last Name' />

                            <FormLabel>Username</FormLabel>
                            <Input placeholder='Username'/>

                            <FormLabel>Gender</FormLabel>
                                <Select placeholder='Select Gender'>
                                    <option>Female</option>
                                    <option>Male</option>
                                </Select>

                            <FormLabel>Date of Birth</FormLabel>
                            <Input
                                placeholder="Select Date and Time"
                                size="md"
                                type="datetime-local"
                                />
                            

                            <FormLabel>Email</FormLabel>
                            <Input placeholder={"Email/Username"} onChange={(event) => setEmail(event.target.value)}/>
                            
                            <FormLabel>Password</FormLabel>
                            <InputGroup size='md'>
                                <Input
                                    pr='4.5rem'
                                    type={show ? 'text' : 'password'}
                                    placeholder='Enter password'
                                />
                            </InputGroup>

                            <FormLabel>Address</FormLabel>
                            <Input placeholder='Address'/>

                            <FormLabel>Phone Number</FormLabel>
                            <InputGroup>
                                <InputLeftAddon children="+63"/>
                                <Input type="phone" roundedLeft="0" placeholder="phone number" />
                            </InputGroup>
                            
                        </Stack>
                           
                    </FormControl>
            
                        <Text fontSize="md" align="center" paddingTop="5">Already have an account? 
                            <Button colorScheme='blackAlpha' variant='link'>Login</Button></Text>

                        <Button 
                        colorScheme='red' 
                        width={"7vw"} 
                        alignSelf={"flex-start"} 
                        onClick={() => Router.push("/Index")}
                        >Register</Button> 

                    </Box>
                 </Container>
          </ChakraProvider>
          
          


         
        </>
      )
}

const styleProps = {
    indexWrapper: {
      height: "100vh",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      bgColor: "#22202A",
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