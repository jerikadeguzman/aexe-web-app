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
import { 
  Avatar, 
  AvatarBadge, 
  AvatarGroup, 
  AiOutlineUser, 
  Accordion, 
  AccordionItem, 
  AccordionButton,
  AccordionIcon, 
  AccordionPanel
} from '@chakra-ui/react'
import React, { useEffect, useState, useContext } from "react";
//import Router from 'react'
import { FiMenu, FiSquare } from 'react-icons/fi'
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


export default function Dashboard() {
  const isDesktop = useBreakpointValue({ base: false, lg: true })
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  useEffect(() => {
    setTimeout(() => {
      const checkSession = localStorage.getItem("email");
      if (!checkSession) {
        Router.push("/");
      }
    }, []);
  }, []);

export default function Forums(){
    return(
        <> 
            <Flex>
            
              <Center>     
                <Box display='flex'
                   bgColor='whiteAlpha.900'
                   border='black'
                  >
                    
                  <Image src='/Faq.jpg' alt='log' h="600px" w="1550px"
                    margin='23' />
              


                    

                  
                </Box>

            <Center>
              <Box bg="lavender" w="1550px" h="800px" >
                  <Center>
                    <HStack>
                    <Box marginRight="3" marginLeft="5" >
                      <Image src='/faq.jpg' alt='log' h="600px" w="800px"/>
                    </Box>
                    <Box bg="#8FAADC" w="800px" h="800px"
                          rounded="10px"
                          borderColor="gray.300"
                          boxShadow="md">

                            <HStack justify='space-between' w='full'>
                              <Text textAlign='center' 
                              padding='12' 
                              fontSize='29' 
                              fontWeight='bold'>FREQUENTLY ASKED QUESTIONS (FAQS)</Text>
                            </HStack>

                          <Stack margin='65'>
                              <Accordion allowToggle >
                                <AccordionItem>
                                  <h2>
                                    <AccordionButton _expanded={{ bg: 'tomato', color: 'white' }}>
                                      <Box flex='1' textAlign='left'>
                                        Click me to see a different style
                                      </Box>
                                      <AccordionIcon />
                                    </AccordionButton>
                                  </h2>
                                  <AccordionPanel>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                    commodo consequat.
                                  </AccordionPanel>
                                </AccordionItem>
                              </Accordion>

                              <Accordion allowToggle >
                                <AccordionItem>
                                  <h2>
                                    <AccordionButton _expanded={{ bg: 'red.500', color: 'white' }}>
                                      <Box flex='1' textAlign='left'>
                                        Click me to see a different style
                                      </Box>
                                      <AccordionIcon />
                                    </AccordionButton>
                                  </h2>
                                  <AccordionPanel>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                    commodo consequat.
                                  </AccordionPanel>
                                </AccordionItem>
                              </Accordion>

                              <Accordion allowToggle>
                                <AccordionItem>
                                  <h2>
                                    <AccordionButton _expanded={{ bg: 'green.400', color: 'white' }}>
                                      <Box flex='1' textAlign='left'>
                                        Click me to see a different style
                                      </Box>
                                      <AccordionIcon />
                                    </AccordionButton>
                                  </h2>
                                  <AccordionPanel>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                    commodo consequat.
                                  </AccordionPanel>
                                </AccordionItem>
                              </Accordion>

                              <Accordion allowToggle>
                                <AccordionItem>
                                  <h2>
                                    <AccordionButton _expanded={{ bg: 'purple.400', color: 'white' }}>
                                      <Box flex='1' textAlign='left'>
                                        Click me to see a different style
                                      </Box>
                                      <AccordionIcon />
                                    </AccordionButton>
                                  </h2>
                                  <AccordionPanel>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                    commodo consequat.
                                  </AccordionPanel>
                                </AccordionItem>
                              </Accordion>
  




                          </Stack>

                      </Box> 
                    </HStack>
                  </Center>


                  </Box>
                </Center>

                
            
                
            </Flex> 


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