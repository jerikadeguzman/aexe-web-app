import Head from 'next/head'
import { Heading, Center, Flex, Button, Stack, HStack, VStack, Text, Input, Box, Image, Switch, useColorModeValue,
  useBreakpointValue, Container, ButtonGroup, useDisclosure,FormControl} from "@chakra-ui/react";
import { Avatar, AvatarBadge, AvatarGroup,} from '@chakra-ui/react'
import React, { useEffect, useState, useContext } from "react";
import Router from 'react'
import { IconButton } from '@chakra-ui/react'
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

import { AddIcon } from '@chakra-ui/icons';
import { FiMenu } from 'react-icons/fi';


export default function exercise(){
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
                  
                      <FormControl isRequired>

                        <Center>
                          <Box display='flex'
                          bgColor='whiteAlpha.900'
                          border='black'
                          >


                          </Box>      
                        </Center>

                        <Stack>
                        <Box borderwidth="1px" borderRadius="lg" p={4} align="center" mt={3}>
                          <Text fontSize="30" align="center" fontStyle='bold'> EXERCISE</Text>

                        </Box>

                        </Stack> 

                        <Stack direction='row' spacing={4} align='center'
                          margin={1}
                          marginTop={"75px"}
                          width="30spx"
                          justifyContent="center">
                        <Button colorScheme='twitter' variant='solid' size='lg' h='100' width={60}>
                          BMI
                        </Button>
                        <Button colorScheme='twitter' variant='solid'size='lg'  h='100' width={60}>
                          Full Body
                        </Button>
                        <Button colorScheme='twitter' variant='solid'size='lg'  h='100' width={60}>
                          Lower Body
                        </Button>
                        <Button colorScheme='twitter' variant='solid'size='lg'  h='100' width={60}>
                          Leg/Butt
                        </Button>

                        </Stack>

                        <Stack direction='row' spacing={3} align='center' margin={1}
                          marginTop={"50px"}
                          width="30spx"
                          justifyContent="center">
                        <Button colorScheme='twitter' variant='solid' size='lg'  h='100' width={60}>
                          Abs
                        </Button>
                        <Button colorScheme='twitter' variant='solid' size='lg'  h='100' width={60} >
                          Chest
                        </Button>
                        <Button colorScheme='twitter' variant='solid' size='lg'  h='100' width={60}>
                          Shoulder/Back
                        </Button>
                        <Button colorScheme='twitter' variant='solid' size='lg'  h='100' width={60}>

                        </Button>
                        </Stack>


                        <Stack direction='row' align='baseline' margin={10}
                          marginRight="300px"
                          width="120spx"
                          justifyContent="right">
                        <ButtonGroup colorScheme='red' variant='solid' size='lg' h='1'>
                        <Button>UPDATE</Button>
                        <IconButton colorScheme='blackAlpha' aria-label='Plus Button' variant= 'outline' icon={<AddIcon />} /> 

                        </ButtonGroup>
                        </Stack> 

                      </FormControl>
                            
                            
                  
              </Box>
            </Center>
              

          </Box>
            
        </>
  ) 

}
