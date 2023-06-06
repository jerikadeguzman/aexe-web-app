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
  useColorModeValue,
  useBreakpointValue,
  Container,
  useDisclosure
} from "@chakra-ui/react";
import { Avatar, AvatarBadge, AvatarGroup, AiOutlineUser } from '@chakra-ui/react'
import React, { useEffect, useState, useContext } from "react";
import { Form, FormControl, FormErrorMessage, FormLabel } from '@chakra-ui/react'
import Router from "next/router";
import { FiMenu } from 'react-icons/fi'
import { IconButton, ButtonGroup } from '@chakra-ui/react'
import { ref, uploadBytes, getDownloadURL, getStorage } from 'firebase/storage';
import { useAuth } from "../firebase";
import TopDrawer from '../constanst/components/drawer';
import UserDataContext from '../context/UserDataContext';


export default function Messages() {
  const userDataContext = useContext(UserDataContext);
  useEffect(() => {
    setTimeout(() => {
      userDataContext.data ?
        console.log(userDataContext.data)
        : Router.push("/");

    }, []);
  }, []);
  return (
    <>
      <Head>
        <title>ARInstructor</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/aexelogo.png" />
      </Head>
      <Box as="section" pb={{ base: '12', md: '24' }} bg="#D9D9D9" maxW="100vw" minH="100vh">

        <TopDrawer />

      </Box>
    </>
  )
}