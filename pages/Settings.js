import Head from 'next/head'
import { Heading, Center, Flex, Button, Stack, HStack, VStack, Text, Input, Box, Image, Switch, Select, useColorModeValue, InputGroup,InputLeftAddon,
  useBreakpointValue, Container, useDisclosure, FormControl, ChakraProvider,FormLabel, WrapItem,ButtonGroup, onCrop, onClose, setSrc, preview} from "@chakra-ui/react";
import {Avatar, AvatarGroup, AiOutlineUser } from "@chakra-ui/avatar"
import React, { useEffect, useState, useContext } from "react";
//import Avatar from 'react-avatar-edit';
import Router from 'react'
import { IconButton } from '@chakra-ui/react'
import { SmallAddIcon } from '@chakra-ui/icons';



export default function Settings(){
  
    return(
         <>
            <Flex>

              <Center>
                  <Box display='flex'
                        bgColor='whiteAlpha.900'
                        border='black'
                        >


                    </Box>
                    <Center>
                      <Box bg="#8FAAADC" w="550px" h="750px" paddingLeft='55'
                          rounded="1px"
                          borderColor="gray.300"
                          boxShadow="md">
                        <VStack bgColor='blue.100' margin='5' h='10'> 
                        <Text fontSize="20" align="center" fontStyle='bold'> General Information</Text>

                        </VStack>
                        <FormControl isRequired>
                         <Stack spacing={1} paddingLeft="30">
                            
                            <FormLabel>First Name</FormLabel>
                            <Input placeholder='First Name'/>
                              
                            <FormLabel>Last Name</FormLabel>
                            <Input placeholder='Last Name' />
                               
                            <FormLabel>Username</FormLabel>
                            <Input placeholder='Username'/>
                               
                            <FormLabel>Gender</FormLabel>
                              <Select placeholder='Select Gender'>
                                <option>Female</option>
                                <option>Male</option>
                              </Select>
                                    
                              <FormLabel>Date of Birth</FormLabel>
                              <Input
                                placeholder="Select Date and Time"
                                size="md"
                                type="datetime-local"
                                />

                              <FormLabel>Email</FormLabel>
                              <Input placeholder={"Email/Username"} onChange={(event) => setEmail(event.target.value)}/>
                    
                              <FormLabel>Address</FormLabel>
                              <Input placeholder='Address'/>
                              
                              <FormLabel>Phone Number</FormLabel>
                              <InputGroup>
                                <InputLeftAddon children="+63"/>
                                <Input type="phone" roundedLeft="0" placeholder="phone number" />
                              </InputGroup>
                            
                            
                            </Stack>
                              
                        </FormControl>
                      </Box>

                    </Center>

              </Center>
                      <VStack >

                        <Box w="250px" h="250px" margin={15}
                          rounded="1px"
                          borderColor="gray.300"
                          boxShadow="md">
                                  
                            <Stack bgColor='blue.100'> 
                              <Text fontSize="25" align="center" fontStyle='bold'> Profile </Text>
                            </Stack>

                            <VStack margin='3'  spacing='10'>
                              
                                <Avatar size='2xl' src='https://bit.ly/broken-link' />
                      
                                <Button leftIcon={<SmallAddIcon />} colorScheme='teal' size='md' >Upload</Button>
                           
                            </VStack>
                          </Box>

                          <HStack margin={20}>
                            <Box w="600px" h="280px" bgColor="#8FAAADC"  margin={18} padding='10' paddingleft='5' marginLeft='10'
                              rounded="1px"
                              borderColor="gray.300"
                              boxShadow="md">
                              
                              <VStack bgColor='blue.100'>
                                <Text margin={5}> SECURITY</Text>
                              </VStack>

                              <FormControl isRequired>
                                  <HStack paddingLeft="3" spacing={10}>
                                      <FormLabel> Old Password</FormLabel>
                                        <Input placeholder='Old Password'/>
                                  </HStack>      
                                  <HStack paddingLeft="3" spacing={9}>                    
                                    <FormLabel>New Password</FormLabel>
                                      <Input placeholder='New Password' />
                                  </HStack>
                                  <HStack  paddingLeft="3" spacing={4}>
                                    <FormLabel>Confirm Password</FormLabel>
                                        <Input placeholder='Confirm Password'/>
                                  </HStack>
                              </FormControl>
                            </Box>

                           
                          </HStack>

                      </VStack>
                        <Center paddingEnd={50}>

                          <HStack direction='row' align='end' 
                                  height="600px"
                                  width="120spx"
                                  justifyContent="right">
                                <ButtonGroup colorScheme='red' variant='solid' size='lg' h='1'>
                                  <Button>Save All</Button>
                                  <Button>Cancel</Button>
                                </ButtonGroup>

                          </HStack>
                        </Center>
            </Flex>

          </>
    ) 
}
