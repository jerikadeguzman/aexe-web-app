import Head from 'next/head'
import { Heading, Center, Flex, Button, Stack, HStack, VStack, Text, Input, Box, Image, Switch, IconButton, useColorModeValue,
  useBreakpointValue, Container, useDisclosure} from "@chakra-ui/react";
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
import NextLink from 'next/link'
import Router from 'next/router';


export default function Messages(){
    return(
        <> 
            <Flex>
                <Center>
                    <Heading marginLeft={35} textColor="orange">AEXE</Heading>
                </Center>
            </Flex>



        </>
    ) 
}
