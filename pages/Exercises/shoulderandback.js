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
            <Box as="nav" 
                bg="bg-surface" 
                boxShadow={useColorModeValue('sm', 'sm-dark')}>
              <Flex>
                <IconButton
                ref={btnRef}
                color="white"
                icon={<FiMenu fontSize="1.25rem"/>}
                onClick={onOpen}
                aria-label="Open Menu"
                bg="#97392F"
                />
                <IconButton
                icon={<Image src="/aexelogo.png"/>}
                w="5px"
                isRound={true}
                aria-label="Homepage"
                onClick={() => Router.push("/dashboard")}
                />

              <Drawer
                isOpen={isOpen}
                placement="left"
                colorScheme={"blue"}
                onClose={onClose}
                finalFocusRef={btnRef}>

                <DrawerOverlay/>
                <DrawerContent>
                  <DrawerCloseButton />

                  <DrawerHeader bgColor='#97392F'>
                    <HStack>
                      <Heading 
                      as='h4' 
                      size='md' 
                      color='whiteAlpha.900'>Welcome Admin</Heading>
                    </HStack>
                  </DrawerHeader>

                  <DrawerBody bgColor='#ffffff'>
                    <Flex flexDir="column" align="center">
                      <NextLink href="/Messages" passHref>
                        <Button as="a" 
                        variant="ghost" 
                        aria-label="Meesages" 
                        my={5} w="100%" 
                        textColor='#696969' 
                        color="blue">Messages</Button>
                      </NextLink>
                  </Flex>

                  <Flex flexDir="column" align="center">
                      <NextLink href="/ARInstructor" passHref>
                        <Button as="a" 
                        variant="ghost" 
                        aria-label="AR Instructor"
                         my={5} w="100%" 
                         textColor='#696969'>AR Instructor</Button>
                      </NextLink>
                  </Flex>

                  <Flex flexDir="column" align="center">
                      <NextLink href="/Announcement" passHref>
                        <Button as="a" 
                        variant="ghost" 
                        aria-label="Announcements" 
                        my={5} w="100%" 
                        textColor='#696969'>Announcement</Button>
                      </NextLink>
                  </Flex>

                  <Flex flexDir="column" align="center">
                      <NextLink href="/UserInquiries" passHref>
                        <Button as="a" 
                        variant="ghost" 
                        aria-label="UserInquiries" 
                        my={5} w="100%" 
                        textColor='#696969'>User Inquiries</Button>
                      </NextLink>
                  </Flex>

                  <Flex flexDir="column" align="center">
                      <NextLink href="/Settings" passHref>
                        <Button as="a" 
                        variant="ghost" 
                        aria-label="Settings" 
                        my={5} w="100%" 
                        textColor='#696969'>Settings</Button>
                      </NextLink>
                  </Flex>

                  </DrawerBody>

                  <DrawerFooter bgColor='#ffffff'>
                    <Button colorScheme='red'
                    onClick={() => {Router.push("/")
                    localStorage.clear();
                  }}>Logout</Button>
                  </DrawerFooter>

                </DrawerContent>
              </Drawer>

              </Flex>
            </Box>

            <Center>
                <Box bgColor="#ffffff" w="1550%" h="1020%" >
                    <HStack direction="row" align="flex-end">
                    <IconButton mt="2%" ml="3%" as={ChevronLeftIcon} size="sm"
                    bgColor="#ffffff"
                    onClick={() => Router.push("/Exercise")}/>
                    
                    </HStack>
                
                <Container maxW='container.md'>
                <Image 
                      src="/shoulderback.jpg"
                      borderRadius='lg'/>
                <Card variant='elevated' mb="10%">
                <CardHeader>
                    <Heading>Shoulder and Back Exercises</Heading>
                    <Text size='sm' marginTop={2} spacing={2} textAlign="justify" lineHeight={6}>
                    A shoulder and back training regimen is intended to develop broad, 
                    enormous shoulder muscles and a muscular, powerful back. 
                    The advantages of working your shoulders and back at the same time, 
                    as well as a general description of the workout. When a program is 
                    correctly designed, training the shoulders and back can increase 
                    strength and bulk.
                    </Text>
                </CardHeader>
                <CardBody>
                    <Stack spacing='4'>
                    <Box>
                        <Heading size='sm' >Exercises:</Heading>
                    </Box>
                  

                    <Box>
                      <Text>Alternating superman</Text>
                      <Text>Anklet push ups</Text>
                      <Text>Arm cross side lunge</Text>
                      <Text>Arm swings</Text>
                      <Text>Bear walks</Text>
                      <Text>Break dancer kick</Text>
                      <Text>Crab toe touches</Text>
                      <Text>Half squat jab cross</Text>
                      <Text>Lower back stretch</Text>
                      <Text>Neck rolls</Text>
                      <Text>Pilates swimming</Text>
                      <Text>Shoulder stretch</Text>

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
