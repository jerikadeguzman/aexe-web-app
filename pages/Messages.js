import Head from 'next/head'
import { Heading, Center, Flex, Button, Stack, HStack, VStack, Text, Input, Box, Image, Switch, useColorModeValue,
  useBreakpointValue, Container, useDisclosure, FormControl} from "@chakra-ui/react";
import { Avatar, AvatarBadge, AvatarGroup, AiOutlineUser } from "@chakra-ui/avatar"
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
//import { Icon, Search2Icon } from '@chakra-ui/react'





export default function Messages(){
  const btnRef = React.useRef();
  const { isOpen, onOpen, onClose } = useDisclosure();
  useEffect(() => {
    setTimeout(() => {
      const checkSession = localStorage.getItem("email");
      if (!checkSession) {
        Router.push("/");
      }      
    }, []);
  }, []);

  
  

    return(
        <> 
            <Flex>
              <FormControl>
              <Center>
                   <Box display='flex'
                   bgColor='whiteAlpha.900'
                   border='black'
                   >


                    

                  
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



          
          
        </>
    ) 
}
