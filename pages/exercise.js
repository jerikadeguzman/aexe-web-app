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


export default function exercise(){
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
                  
          </Flex>
           

        </>
  ) 

}
