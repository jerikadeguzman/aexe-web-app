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
  IconButton, 
  useColorModeValue,
  useBreakpointValue, 
  Container, 
  useDisclosure
} from "@chakra-ui/react";
import { Avatar, AvatarBadge, AvatarGroup, AiOutlineUser} from '@chakra-ui/react'
import React, { useEffect, useState, useContext } from "react";
import { FiMenu } from 'react-icons/fi'
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";
import NextLink from 'next/link'

import Router from "next/router";

  export default function Drawer() {
    const isDesktop = useBreakpointValue({ base: false, lg: true })
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = React.useRef();

    return(
       
        <Box as="section" pb={{ base: '12', md: '24' }}  bg="#303030"> 
            <Box as="nav" bg="bg-surface" boxShadow={useColorModeValue('sm', 'sm-dark')}>
              <Flex>
                <IconButton
                color="white"
                ref={btnRef}
                icon={<FiMenu fontSize="1.25rem"/>}
                onClick={onOpen}
                aria-label="Open Menu"
                bg="#303030"
                />

                <IconButton
                icon={<Image src="/aexelogo.png"/>}
                w="5px"
                isRound={true}
                aria-label="Homepage"
                onClick={() => Router.push("/dashboard")}
                />
                  
                  <Avatar 
                  //src={url}
                  bg='teal.500'  
                  size="sm" align="center" 
                  marginLeft="73%" 
                  marginTop="1"></Avatar>

                <Drawer
                isOpen={isOpen}
                placement="left"
                colorScheme={"blue"}
                onClose={onClose}
                finalFocusRef={btnRef}>

                <DrawerOverlay/>
                <DrawerContent>
                  <DrawerCloseButton />

                  <DrawerHeader bgColor='#2F5597'>
                    <HStack>
                     
                      <Heading as='h4' size='md' color='whiteAlpha.900'>Welcome</Heading>
                    </HStack>
                  </DrawerHeader>

                  <DrawerBody bgColor='#8FAADC'>
                    <Flex flexDir="column" align="center">
                      <NextLink href="/Messages" passHref>
                        <Button as="a" 
                        variant="ghost" 
                        aria-label="Messages" 
                        my={5} w="100%" 
                        textColor='#DAE3F3' 
                        color="blue">Messages</Button>
                      </NextLink>
                  </Flex>

                  <Flex flexDir="column" align="center">
                      <NextLink href="/ARInstructor" passHref>
                        <Button as="a" 
                        variant="ghost" 
                        aria-label="AR Instructor" 
                        my={5} w="100%" 
                        textColor='#DAE3FE'>AR Instructor</Button>
                      </NextLink>
                  </Flex>

                  <Flex flexDir="column" align="center">
                      <NextLink href="/Announcement" passHref>
                        <Button as="a" 
                        variant="ghost" 
                        aria-label="Announcements" 
                        my={5} w="100%" 
                        textColor='#DAE3F3'>Announcement</Button>
                      </NextLink>
                  </Flex>

                  <Flex flexDir="column" align="center">
                      <NextLink href="/Forums" passHref>
                        <Button as="a" 
                        variant="ghost" 
                        aria-label="Forums" 
                        my={5} w="100%" 
                        textColor='#DAE3F3'>Forums</Button>
                      </NextLink>
                  </Flex>

                  <Flex flexDir="column" align="center">
                      <NextLink href="/Settings" passHref>
                        <Button as="a" 
                        variant="ghost" 
                        aria-label="Settings" 
                        my={5} w="100%" 
                        textColor='#DAE3F3'>Settings</Button>
                      </NextLink>
                  </Flex>

                  </DrawerBody>

                  <DrawerFooter bgColor='#8FAADC'>
                    <Button colorScheme='red'
                    onClick={() => {Router.push("/")
                    localStorage.clear();
                  }}>Logout</Button>
                  </DrawerFooter>

                </DrawerContent>
              </Drawer>

              </Flex>
         
            </Box>


        </Box>
       
    )
  }