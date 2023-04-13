import Head from 'next/head'
import { 
  Heading, 
  Center, 
  Flex, 
  Button, 
  Stack, 
  HStack, 
  VStack, 
  Text, 
  Input, 
  Box, 
  Image, 
  Switch, 
  useColorModeValue,
  useBreakpointValue, 
  Container, 
  useDisclosure,
  SimpleGrid,
  Icon
} from "@chakra-ui/react";
import { Grid, GridItem } from '@chakra-ui/react'
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import { Avatar, AvatarBadge, AvatarGroup, AiOutlineUser } from '@chakra-ui/react'
import React, { useEffect, useState, useContext } from "react";
import Router from "next/router";
import { FiMenu } from 'react-icons/fi'
import { IconButton, ButtonGroup } from '@chakra-ui/react'
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { AddIcon, ChevronLeftIcon, SmallAddIcon, StackDivider, Divider, textTransform } from '@chakra-ui/icons';
import { ChakraProvider } from '@chakra-ui/provider';
import TopDrawer from '../../constanst/components/drawer';


export default function fullbody(){
  const isDesktop = useBreakpointValue({ base: false, lg: true })
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  
    return(
        <> 
      <Head>
        <title>Exercises</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/aexelogo.png" />
      </Head>

          <Box as="section" pb={{ base: '12', md: '24' }}  bg="#97392F" > 
           <TopDrawer/>
            <Center>
                <Box bgColor="#ffffff" w="1550%" h="1020%" >
                    <HStack direction="row" align="flex-end">
                    <IconButton mt="2%" ml="3%" as={ChevronLeftIcon} size="sm"
                    bgColor="#ffffff"
                    onClick={() => Router.push("/exercise")}/>
                    
                    </HStack>
                
                <Container maxW='container.md'>
                <Image 
                      src="/chest.png"
                      borderRadius='lg'/>
                <Card variant='elevated' mb="10%">
                <CardHeader>
                    <Heading>Chest Exercises</Heading>
                    <Text size='sm' marginTop={2} spacing={2} textAlign="justify" lineHeight={6}>
                    Exercises for the chest muscles are done to keep the body 
                    strong and healthy while also promoting muscle growth. 
                    Push-ups are a terrific approach to work out the chest 
                    muscles because no special equipment is required and 
                    only the individual's own body weight is lifted.
                    </Text>
                </CardHeader>
                <CardBody>
                    <Stack spacing='4'>
                    <Box>
                        <Heading size='sm' >Exercises:</Heading>
                    </Box>
                  

                    <Box>
                      <Text>Around the worlds</Text>
                      <Text>Asymmetrical push up</Text>
                      <Text>Butterfly dips</Text>
                      <Text>Chest press punch up</Text>
                      <Text>Chest stretch</Text>
                      <Text>Decline push up</Text>
                      <Text>Hindu push ups</Text>
                      <Text>Knee and elbow press up</Text>
                      <Text>Knee push ups</Text>
                      <Text>Plank bird dog</Text>
                      <Text>Push up</Text>
                      <Text>Staggered arm push up</Text>
                    </Box>
                    
                    </Stack>
                </CardBody>
                </Card>

                </Container>



                </Box>
            </Center>
            </Box>
            </> 
    )
}
