import Head from 'next/head'
import { Heading, Center, Flex, Button, Stack, HStack, VStack, Text, Input, Box, Image, Switch, IconButton, useColorModeValue,
  useBreakpointValue, Container, useDisclosure,FormControl} from "@chakra-ui/react";
import { Avatar, AvatarBadge, AvatarGroup, AiOutlineUser } from '@chakra-ui/react'
import React, { useEffect, useState, useContext } from "react";
import Router from 'react'
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
    return(
        <> 
            <Flex>
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
                  <Text fontSize="26" align="center" fontStyle='bold'> EXERCISE</Text>

                </Box>

              </Stack>

              </FormControl>

                  
            </Flex>
          
         
        </>
    ) 
<<<<<<< HEAD
}
=======
}
>>>>>>> 42c2cc6148924c1b8d5e9a9626860a7079ab702c
