import Head from 'next/head'
import { Heading, Center, Flex, Button, Stack, HStack, VStack, Text, Input, Box, Image, Switch, useColorModeValue,
  useBreakpointValue, Container, useDisclosure} from "@chakra-ui/react";
import { Avatar, AvatarBadge, AvatarGroup, AiOutlineUser } from '@chakra-ui/react'
import React, { useEffect, useState, useContext } from "react";
import { FiMenu } from 'react-icons/fi'
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


export default function Messages(){
    return(
        <> 
            <Flex>
                <Center>
                   <Box display='flex'
                   bgColor='whiteAlpha.900'
                   border='black'
                   >

                    
                    
                   </Box>



                    
                </Center>
            </Flex>



        </>
    ) 
}
