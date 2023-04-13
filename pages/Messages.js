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
  useDisclosure,
  FormControl,
  WrapItem,
  Card, CardHeader, CardBody, CardFooter,
  Divider
} from "@chakra-ui/react";
import { Avatar, AvatarBadge, AvatarGroup, AiOutlineUser } from "@chakra-ui/avatar"
import React, { useEffect, useState, useContext } from "react";
import { IconButton } from '@chakra-ui/react'
import Sidebar from '../constanst/components/Sidebar';
import { FiMenu } from 'react-icons/fi';
import { ChatIcon, Search2Icon } from '@chakra-ui/icons';
import NextLink from "next/link";
import Router from "next/router";
import { ChakraProvider } from '@chakra-ui/provider';
import { Component } from 'react';
import { storage } from "../firebase";
import { ref, uploadBytes, getDownloadURL, getStorage } from 'firebase/storage';
import { useAuth } from "../firebase";
import TopDrawer from '../constanst/components/drawer'

export default function Messages() {
  const currentUser = useAuth();
  const btnRef = React.useRef();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [user, setUser] = useState();

  const userDataContext = useContext(UserDataContext);
  useEffect(() => {
    setTimeout(() => {
      userDataContext.data ?
        console.log(userDataContext.data)
        : Router.push("/");

    }, []);
  }, []);


  const Topbar = () => {
    return (
      <Flex
        bg="gray.100"
        h="80px"
        w="100%"
        align="center">

        <Avatar src="" marginEnd={3} />
        <Heading size="md">user@gmail.com</Heading>
      </Flex>
    )
  }

  return (
    <>
      <Head>
        <title>Messages</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/aexelogo.png" />
      </Head>

      <Box as="section" pb={{ base: '12', md: '24' }} bg="cyan" maxW="100vw" maxH="100vh">
        <TopDrawer />
        <HStack>
          <VStack w="20%" bg={"blue"} height="100vh">

            <Card
              size="lg"
              align='center'
              variant="outline"
              shadow="base"
              width="25vw"
              bg="#ffffff"
              h="37vh"
              outlineColor="gray.900">

              <CardBody>
                <Center>
                  <Avatar
                    src={user?.profile_url}
                    size="2xl"
                    mt="10%"
                    bg='teal.500' >
                  </Avatar>
                </Center>

                <Stack mt='6' spacing='3' textAlign='center'>
                  <Heading size='md' textAlign="center">{user?.first_name} {user?.last_name}</Heading>
                  <Text>
                    About
                  </Text>
                  <Text>
                    ({user?.age} years old, {user?.address})
                  </Text>
                </Stack>
              </CardBody>

              <CardFooter>
                <Divider />

              </CardFooter>
            </Card>
          </VStack>
          <VStack>

          </VStack>
        </HStack>

      </Box>
    </>
  )
}