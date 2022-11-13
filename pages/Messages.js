import Head from 'next/head'
import { Heading, Center, Flex, Button, Stack, HStack, VStack, Text, Input, Box, Image, Switch, useColorModeValue,
<<<<<<< HEAD
  useBreakpointValue, Container, useDisclosure} from "@chakra-ui/react";
import { Avatar, AvatarBadge, AvatarGroup, AiOutlineUser } from '@chakra-ui/react'
import React, { useEffect, useState, useContext } from "react";
import { FiMenu } from 'react-icons/fi'
=======
  useBreakpointValue, Container, useDisclosure, FormControl} from "@chakra-ui/react";
import { Avatar, AvatarBadge, AvatarGroup, AiOutlineUser } from "@chakra-ui/avatar"
import React, { useEffect, useState, useContext } from "react";
import Router from 'react'
>>>>>>> 8fefdc5084ffa88c856729d5317a8658b0231f36
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
<<<<<<< HEAD
import { Search2Icon } from '@chakra-ui/icons';
=======
import NextLink from "next/link";
<<<<<<< HEAD
=======
//import { Icon, Search2Icon } from '@chakra-ui/react'



>>>>>>> 7f1586553b8ff5ac3c7a7ca8f97435dfbfa13593
>>>>>>> 8fefdc5084ffa88c856729d5317a8658b0231f36


export default function Messages(){
    return(
        <> 
<<<<<<< HEAD
            <Flex>
                <Center>
=======
<<<<<<< HEAD
            <Flex>
              <FormControl>
              <Center>
>>>>>>> 8fefdc5084ffa88c856729d5317a8658b0231f36
                   <Box display='flex'
                   bgColor='whiteAlpha.900'
                   border='black'
                   >
<<<<<<< HEAD
=======


                    

                  
                  </Box>
                <Center>
                  <Box bg="lavender" w="1550px" h="800px">
                    <Center>
                      <Box bg="#8FAAADC" w="800px" h="800px" 
                          rounded="10px"
                          borderColor="gray.300"
                          boxShadow="md">
                        <HStack justify='space-between' w='full'>
                          <Text textAlign='left' padding='5' fontSize='20' fontWeight='bold'>Messages</Text>
                          <IconButton aria-label='Search Message' icon={<Search2Icon/>} spacing='5'/>

                        </HStack>
                      
                         
                     
                      </Box>
                    </Center>

                  </Box>




                </Center>

              </Center>

                
              </FormControl>
                
            </Flex>


=======
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
>>>>>>> 8fefdc5084ffa88c856729d5317a8658b0231f36

                    
                    
                   </Box>



<<<<<<< HEAD
                    
                </Center>
            </Flex>


=======
          </Box>
>>>>>>> 7f1586553b8ff5ac3c7a7ca8f97435dfbfa13593
>>>>>>> 8fefdc5084ffa88c856729d5317a8658b0231f36

        </>
    ) 
}
