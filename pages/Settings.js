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
  Select, 
  useColorModeValue, 
  InputGroup,
  InputLeftAddon,
  useBreakpointValue, 
  Container, 
  useDisclosure, 
  FormControl, 
  ChakraProvider,
  FormLabel, 
  WrapItem,
  Avatar,
  ButtonGroup} from "@chakra-ui/react";
import {  AvatarBadge, AvatarGroup, AiOutlineUser } from "@chakra-ui/avatar"
import React, { useEffect, useState, useContext } from "react";
//import Router from 'react'
import { FiMenu } from 'react-icons/fi'
import { IconButton } from '@chakra-ui/react'
import { 
  Modal, 
  ModalOverlay, 
  ModalContent, 
  ModalHeader, 
  ModalBody, 
  ModalCloseButton, 
  ModalFooter, 
  cancelRef
} from "@chakra-ui/react";
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
import { SmallAddIcon } from '@chakra-ui/icons';
import Router from "next/router";
import { storage } from "../firebase";
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { useAuth, upload } from "../firebase";

export default function Settings(){
  const currentUser = useAuth();
  const isDesktop = useBreakpointValue({ base: false, lg: true })
  const { isOpen, onOpen, onClose } = useDisclosure();
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

  const [image, setImage] = useState(null);
  const [url, setUrl] = useState("");
  const handleImageChange =(e) =>{
    if(e.target.files[0]){
      setImage(e.target.files[0]);
    }
  };
  const handleSubmit = () => {
    const imageURL = ref(storage, `/files/${imageURL}`);
    uploadBytes(imageURL, image).then(() =>{
      getDownloadURL(imageURL).then((url) => {
        setUrl(url);
        console.log(url);
        //update doc ng user na naka login
      }).catch(error => {
        console.log(error.message, "error");
      });
      setImage();
    }).catch(error => {
      console.log(error.message);
    });

  }; 

 useEffect(() =>{
  if ( currentUser?.url){
    setUrl(currentUser.url);
    console.log("fetching");
  }
 }, [])

    return(
        <> 
      <Head>
        <title>Settings</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/aexelogo.png" />
      </Head>
          
          <Box as="section" pb={{ base: '12', md: '24' }}  bg="#97392F"> 
          <Box as="nav" bg="bg-surface" boxShadow={useColorModeValue('sm', 'sm-dark')}>
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
                  marginLeft="83%"
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
                      <Heading as='h4' size='md' color='whiteAlpha.900'>Welcome Admin</Heading>
                    </HStack>
                  </DrawerHeader>

                  <DrawerBody bgColor='#ffffff '>
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
                        aria-label="Messages" 
                        my={5} w="100%" 
                        textColor='#696969' 
                        color="blue">Messages</Button>
                      </NextLink>
                  </Flex>

                  <Flex flexDir="column" align="center">
                      <NextLink href="/ARInstructor" passHref>
                        <Button as="a"
                         variant="ghost" 
                         aria-label="AR Instructor" 
                         my={5} w="100%" 
                         textColor='#696969'>AR Instructor</Button>
                      </NextLink>
                  </Flex>

                  <Flex flexDir="column" align="center">
                      <NextLink href="/Announcement" passHref>
                        <Button as="a" 
                        variant="ghost" 
                        aria-label="Announcements" 
                        my={5} w="100%" 
                        textColor='#696969'>Announcement</Button>
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
                        aria-label="Settings" 
                        my={5} w="100%" 
                        textColor='#696969'>Settings</Button>
                      </NextLink>
                  </Flex>

                  </DrawerBody>

                  <DrawerFooter bgColor='#ffffff'>
                    <Button colorScheme='red'
                   onClick={() => {Router.push("/")
                   localStorage.clear();
                   console.log(localStorage)
                 }}
                    >Logout</Button>
                  </DrawerFooter>

                </DrawerContent>
              </Drawer>

              </Flex>
            </Box>

              <Center>
                <Box bgColor="#ffffff" w="1550%" h="120vh">
                  <Center>
                    <HStack> 
                      <Box bg="#ffffff" w="35vw" h="100vh"
                            alignItems="center"
                            rounded="4px"
                            marginLeft="3vw"
                            borderColor="gray.300"
                            boxShadow="md">
                      <VStack bgColor='#97392F' margin='5' h='10' rounded="20"> 
                        <Text 
                        textColor="white"
                        fontSize="20" 
                        align="center" 
                        fontStyle='bold' 
                        marginTop="1"> General Information</Text>
                      </VStack>

                      <FormControl isRequired 
                      paddingLeft={10} 
                      paddingRight={10}
                      alignContent="center">
                      <Stack spacing={3}>
         
                        <FormLabel variant="floating">First Name</FormLabel>
                        <Input placeholder=" "/>
                          
                        <FormLabel>Last Name</FormLabel>
                        <Input placeholder=" "/>
           
                        <FormLabel>Username</FormLabel>
                        <Input placeholder=" "/>
           
                        <FormLabel>Gender</FormLabel>
                          <Select placeholder=" ">
                            <option>Female</option>
                            <option>Male</option>
                          </Select>
                 
                        <FormLabel>Date of Birth</FormLabel>
                        <Input
                          placeholder=" "
                          size="md"
                          type="datetime-local"
                          />

                        <FormLabel>Address</FormLabel>
                        <Input 
                          placeholder=" "/>
                        
                        <FormLabel>Phone Number</FormLabel>
                        <InputGroup>
                          <InputLeftAddon 
                            children="+63"/>
                          <Input 
                            type="phone" 
                            roundedLeft="0" 
                            placeholder=" " />
                        </InputGroup>
         
         
                    </Stack>          
                    </FormControl>
                    </Box>

                  <Box bgColor="#ffffff">
                    <VStack margin='15px' padding='10px'>
                    <Box bg="#ffffff" w="25vw" h="45vh" margin="15"                   
                      rounded="4px"
                      borderColor="gray.300"
                      boxShadow="md">
                        <Text fontSize="20"
                        bgColor='#97392F'
                        textColor="white"
                        rounded="20px"
                        marginLeft="5px"
                        marginRight="5px"
                        marginTop="5"
                        align="center" 
                        fontStyle='bold'> Profile </Text>
                      <Center>
                        <VStack>
                        <Avatar  //AVATAR
                        marginTop="5%"
                        src={url} 
                        sx={{width: 150, height: 150}}
                        bg='teal.500'></Avatar>
                        <Input type="file" 
                        variant='filled' 
                        onChange={handleImageChange}></Input>
                        <Button 
                          //isDisabled={url}
                          onClick={handleSubmit} 
                          textColor="white"
                          bgColor="#696969" 
                          align="center"
                          size='md'>Submit</Button>
                        </VStack>        
                      </Center>
                  </Box>

                <Box w="45vw" h="50vh"
                    rounded="4px"
                    bgColor="#ffffff"
                    borderColor="gray.300"
                    boxShadow="md">
                    <VStack 
                    bgColor='#97392F'
                    textColor="white" 
                    marginLeft="5" 
                    marginRight="5" 
                    marginTop="5" 
                    rounded="20">
                      <Text 
                      margin={5} 
                      fontSize="20"> Security</Text>
                    </VStack>
                    <FormControl isRequired
                    paddingLeft={10} 
                    paddingRight={10}
                    alignContent="center">
                      <Stack marginTop="5">
                      <HStack justify="space-between">
                          <FormLabel> Old Password</FormLabel>
                            <Input placeholder='Old Password'/>
                        </HStack>      
                        <HStack justify="space-between">                    
                          <FormLabel>New Password</FormLabel>
                            <Input placeholder='New Password' />
                        </HStack>
                        <HStack justify="space-between">
                          <FormLabel>Confirm Password</FormLabel>
                            <Input placeholder='Confirm Password'/>
                        </HStack>
                      </Stack>
                      
                    </FormControl>
                  </Box>

                      <Center>
                        <HStack direction='row' align='flex-end'
                            width="120spx"
                            justifyContent="right">
                          <ButtonGroup colorScheme='red' variant='solid' size='lg' h='1' marginTop="25">
                            <Button>Save All</Button>
                            <Button>Cancel</Button>
                          </ButtonGroup>                  
                        </HStack>
                      </Center>

                    </VStack>
                </Box>


                    </HStack> 
                  </Center>
                </Box>
              </Center>

        </Box>
      </>
    ) 
}