import Head from 'next/head'
import { Heading, Center, Flex, Button, Stack, HStack, VStack, Text, Input, Box, Image, Switch, IconButton, useColorModeValue,
  useBreakpointValue, Container, useDisclosure} from "@chakra-ui/react";
import { Avatar, AvatarBadge, AvatarGroup, AiOutlineUser } from '@chakra-ui/react'
import React, { useEffect, useState, useContext } from "react";
import Router from 'react'
import { FiMenu } from 'react-icons/fi'
import NextLink from 'next/link'
import { Textarea } from '@chakra-ui/react'
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
  } from '@chakra-ui/react';



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

              </Center>
              <Center>
                  <Box bg="lavander" w="900px" h="700px">
                    <Center>
                      <Box bg="BlackAlpha 300" w="800px" h="800px" 
                          rounded="10px"
                          borderColor="gray.300"
                          boxShadow="md">
                            <HStack justify='space-between' w='full'>
                              <Text textAlign='center' padding='12' fontSize='29' fontWeight='bold'>FREQUENTLY ASKED QUESTIONS (FAQS)</Text>
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

                     
                    </Center>

                  </Box>
                </Center>
            </Flex> 


        </>
    ) 
}
