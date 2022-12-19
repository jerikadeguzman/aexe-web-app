import Head from 'next/head'
import { Heading, Center, Flex, Button, Stack, HStack, VStack, Text, Input, Box, Image, Switch, ButtonGroup, useColorModeValue,
  useBreakpointValue, Container, useDisclosure, FormControl} from "@chakra-ui/react";
import { Avatar, AvatarBadge, AvatarGroup, AiOutlineUser } from '@chakra-ui/react'
import React, { useEffect, useState, useContext } from "react";
import { Form, FormControl, FormErrorMessage, FormLabel } from '@chakra-ui/react'
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


export default function ARInstructor(){
    return(
        <> 
            <Flex>
              <FormControl isRequired>
                <Center>
                  <Box display='flex'
                   bgColor='whiteAlpha.900'
                   border='black'
                  >
            
                  
>>>>>>> f47a1bb283bf7ca19624bee1af7bbe3f4cacd67d
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

                  
            </Flex>
          
         
        </>
    ) 
}
