import Head from 'next/head'
import { 
  Heading, 
  Flex, 
  Button, 
  HStack, 
  Box, 
  Image, 
  Switch, 
  IconButton, 
  useColorModeValue,
  useBreakpointValue, 
  useDisclosure
} from "@chakra-ui/react";
import { Avatar} from '@chakra-ui/react'
import { ref, getDownloadURL, } from 'firebase/storage';
import { storage } from "../../firebase";
import React, { useEffect, useState, } from "react";
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

import Router from "next/router";

  export default function TopDrawer() {
    const isDesktop = useBreakpointValue({ base: false, lg: true })
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [url, setUrl] = useState(null);
    const btnRef = React.useRef();

    useEffect(() => {
      setTimeout(() => {
        const checkSession = localStorage.getItem("email");
        const user_data = JSON.parse(checkSession);
        checkSession?
        getProfileData(user_data.profile_url)
       : Router.push("/");
        
      }, []);
    }, []);
  
    async function getProfileData() {
      const imageURL = ref(storage, `/files/${imageURL}`);
       await getDownloadURL(imageURL).then((url) => {
            setUrl(url);
            console.log(url)
          }).catch(error => {
            console.log(error.message, "error");
          })
    }

    return(
      <Box as="nav" bg="#97392F" boxShadow={useColorModeValue('sm', 'sm-dark')} w="100vw" padding={"1vh"}>
      <Flex>
        <IconButton
        color="white"
        ref={btnRef}
        icon={<FiMenu fontSize="1.25rem"/>}
        onClick={onOpen}
        aria-label="Open Menu"
        bg="#97392F"
        />
        <IconButton
        icon={<Image src="/aexelogo.png"/>}
        w="5px"
        isRound={true}
        aria-label="Homepage"
        onClick={() => Router.push("/dashboard")}
        />
      
      <Avatar 
          src={url}
          bg='teal.500'  
          size="sm" align="center" 
          marginLeft="90%"  
          marginTop="1"></Avatar>

      <Drawer
        isOpen={isOpen}
        placement="left"
        colorScheme={"blue"}
        onClose={onClose}
        finalFocusRef={btnRef}>

        <DrawerOverlay/>
        <DrawerContent>
          <DrawerCloseButton />

          <DrawerHeader bgColor='#97392F'>
            <HStack>
              <Heading 
              as='h4' 
              size='md' 
              color='whiteAlpha.900'>Welcome Admin</Heading>
            </HStack>
          </DrawerHeader>

          <DrawerBody bgColor='#ffffff '>
          <Flex flexDir="column" align="center">
              <NextLink href="/dashboard" passHref>
                <Button as="a" 
                variant="ghost" 
                aria-label="Dashboard" 
                my={5} w="100%" 
                textColor='#696969' 
                color="blue">Dashboard
                </Button>
              </NextLink>
            </Flex>

            <Flex flexDir="column" align="center">
              <NextLink href="/Profile" passHref>
                <Button as="a" 
                variant="ghost" 
                aria-label="Profile" 
                my={5} w="100%" 
                textColor='#696969' 
                color="blue">Profile
                </Button>
              </NextLink>
            </Flex>

            <Flex flexDir="column" align="center">
              <NextLink href="/Messages" passHref>
                <Button as="a" 
                variant="ghost" 
                aria-label="Home" 
                my={5} w="100%" 
                textColor='#696969' 
                color="blue">Messages</Button>
              </NextLink>
          </Flex>

          <Flex flexDir="column" align="center">
              <NextLink href="/ARInstructor" passHref>
                <Button as="a" 
                variant="ghost" 
                aria-label="Home" 
                my={5} w="100%" 
                textColor='#696969'>AR Instructor</Button>
              </NextLink>
          </Flex>

          <Flex flexDir="column" align="center">
              <NextLink href="/Announcement" passHref>
                <Button as="a" 
                variant="ghost" 
                aria-label="Home" 
                my={5} w="100%" 
                textColor='#696969'>Announcement</Button>
              </NextLink>
          </Flex>

          <Flex flexDir="column" align="center">
              <NextLink href="/Userlist" passHref>
                <Button as="a" 
                variant="ghost" 
                aria-label="Userlist" 
                my={5} w="100%" 
                textColor='#696969'>User List</Button>
              </NextLink>
          </Flex>

          <Flex flexDir="column" align="center">
              <NextLink href="/UserInquiries" passHref>
                <Button as="a" 
                variant="ghost" 
                aria-label="UserInquiries" 
                my={5} w="100%" 
                textColor='#696969'>User Inquiries</Button>
              </NextLink>
          </Flex>

          <Flex flexDir="column" align="center">
              <NextLink href="/Settings" passHref>
                <Button as="a" 
                variant="ghost" 
                aria-label="Home" 
                my={5} w="100%" 
                textColor='#696969'>Settings</Button>
              </NextLink>
          </Flex>
          </DrawerBody>

          <DrawerFooter bgColor='#ffffff'>
            <Button colorScheme='red'
            onClick={() => {Router.push("/")
            localStorage.clear();
          }}>Logout</Button>
          </DrawerFooter>

        </DrawerContent>
      </Drawer>

      </Flex>
    </Box>
       
    )
  }