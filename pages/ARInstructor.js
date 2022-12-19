import Head from 'next/head'
import { Heading, Center, Flex, Button, Stack, HStack, VStack, Text, Input, Box, Image, Switch, ButtonGroup, useColorModeValue,
  useBreakpointValue, Container, useDisclosure, FormControl, IconButton} from "@chakra-ui/react";
import { Avatar, AvatarBadge, AvatarGroup, AiOutlineUser } from '@chakra-ui/react'
import React, { useEffect, useState, useContext } from "react";
//import Router from 'react'
import Router from 'next/router';
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
import NextLink from "next/link";


export default function ARInstructor(){
  const isDesktop = useBreakpointValue({ base: false, lg: true })
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
    return(
        <> 
            <Box as="section" pb={{ base: '12', md: '24' }}  bg="#2F5597" > 
            <Box as="nav" bg="bg-surface" boxShadow={useColorModeValue('sm', 'sm-dark')}>
              <Flex>
                <IconButton
                ref={btnRef}
                icon={<FiMenu fontSize="1.25rem"/>}
                onClick={onOpen}
                aria-label="Open Menu"
                bg="#2F5597"
                />
                  <Heading marginLeft={35} textColor="orange" >AEXE</Heading>

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
                      <Avatar bg='teal.500' name='getInitials'></Avatar>
                      <Heading as='h4' size='md' color='whiteAlpha.900'>Welcome</Heading>
                    </HStack>
                  </DrawerHeader>

                  <DrawerBody bgColor='#8FAADC'>
                    <Flex flexDir="column" align="center">
                      <NextLink href="/Messages" passHref>
                        <Button as="a" variant="ghost" aria-label="Home" my={5} w="100%" textColor='#DAE3F3' color="blue">Messages</Button>
                      </NextLink>
                  </Flex>

                  <Flex flexDir="column" align="center">
                      <NextLink href="/ARInstructor" passHref>
                        <Button as="a" variant="ghost" aria-label="Home" my={5} w="100%" textColor='#DAE3FE'>AR Instructor</Button>
                      </NextLink>
                  </Flex>

                  <Flex flexDir="column" align="center">
                      <NextLink href="/Announcement" passHref>
                        <Button as="a" variant="ghost" aria-label="Home" my={5} w="100%" textColor='#DAE3F3'>Announcement</Button>
                      </NextLink>
                  </Flex>

                  <Flex flexDir="column" align="center">
                      <NextLink href="/Forums" passHref>
                        <Button as="a" variant="ghost" aria-label="Home" my={5} w="100%" textColor='#DAE3F3'>Forums</Button>
                      </NextLink>
                  </Flex>

                  <Flex flexDir="column" align="center">
                      <NextLink href="/InquiriesConcern.js" passHref>
                        <Button as="a" variant="ghost" aria-label="Home" my={5} w="100%" textColor='#DAE3F3'>Inquiries/Concern</Button>
                      </NextLink>
                  </Flex>

                  <Flex flexDir="column" align="center">
                      <NextLink href="/Settings" passHref>
                        <Button as="a" variant="ghost" aria-label="Home" my={5} w="100%" textColor='#DAE3F3'>Settings</Button>
                      </NextLink>
                  </Flex>

                  </DrawerBody>

                  <DrawerFooter bgColor='#8FAADC'>
                    <Button colorScheme='red'>Logout</Button>
                  </DrawerFooter>

                </DrawerContent>
              </Drawer>

              </Flex>
            </Box>

            <Center>
              <Box bg="lavender" w="1550px" h="800px" >
                  <Center>
                    <Box bg="#8FAADC" w="800px" h="800px"
                          rounded="10px"
                          borderColor="gray.300"
                          boxShadow="md">

                          <FormControl isRequired>
                              <Center>
                                <Box display='flex'
                                bgColor='whiteAlpha.900'
                                border='black'>
                                </Box>      
                              </Center>

                            <Stack>
                              <Box borderwidth="1px" borderRadius="lg" p={4} align="center" mt={3}>
                                <Text fontSize="26" align="center" fontStyle='bold'>AUGMENTED REALITY INSTRUCTION EXERCISE</Text>

                              </Box>

                            </Stack>

                            <Stack direction='row'  margin='right'
                                marginTop={"200px"}
                                width="50spx"
                                justifyContent="center"
                                spacing={120}>

                              <ButtonGroup variant='solid' spacing='20'>
                                <Button colorScheme='red' size='lg' h='250'
                                alignSelf={"flex-end"}
                                onClick={() => Router.push("/Record")}
                                >View Record Videos</Button>
                                <Button colorScheme='red' size='lg' h='250'
                                onClick={() => Router.push("/exercise")}
                                >Add/Update Exercise</Button>
                              </ButtonGroup>

                            </Stack>
                          </FormControl>

                    </Box>
                  </Center>
              </Box>
            </Center>

          </Box>
           

        </>
    ) 
}
