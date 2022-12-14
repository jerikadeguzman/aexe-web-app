import Head from 'next/head'
import { 
  Heading, 
  Center, 
  Flex, 
  Button, 
  Stack, 
  HStack, 
  VStack,
  StackDivider, 
  Text, 
  Input, 
  Box, 
  Image, 
  Switch, 
  IconButton, 
  useColorModeValue,
  useBreakpointValue, 
  Container, 
  useDisclosure,
  Divider
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
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import { ref, uploadBytes, getDownloadURL, getStorage } from 'firebase/storage';
import { useAuth, storage } from "../firebase";


export default function Dashboard() {
  const currentUser = useAuth();
  const isDesktop = useBreakpointValue({ base: false, lg: true })
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  /*useEffect(() => {
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
  const [url, setUrl] = useState(null);
  const handleImageChange =(e) =>{
    if(e.target.files[0]){
      setImage(e.target.files[0]);
    }
  };
  const handleSubmit = () => {
    const imageURL = ref(storage, `/files/${imageURL}`);
    //image: should be unique name
    uploadBytes(imageURL, image).then(() =>{
      getDownloadURL(imageURL, image).then((url) => {
        setUrl(url);
        //console.log(File)
        //update doc ng user na naka login
      }).catch(error => {
        console.log(error.message, "error");
      });
      setImage(null);
    }).catch(error => {
      console.log(error.message);
    });

  }; 

 useEffect(() =>{
  if ( currentUser?.url){
    setUrl(currentUser.url);
    console.log("fetching");
  }
 }, [])*/

    return (
        <>
      <Head>
        <title>User Inquiries</title>
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
                bg='teal.500' 
                //src={url}
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
                      <Heading 
                      as='h4' 
                      size='md' 
                      color='whiteAlpha.900'>Welcome Admin</Heading>
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

            <Center>
              <Box bgColor="#ffffff" w="1550px" h="300%">
                  <Center>
                    <VStack>

                    <Card 
                    size='md' 
                    align="center" 
                    variant="outline" 
                    marginTop="5%" 
                    shadow="2xl" 
                    marginBottom="5%">
                      <CardHeader>
                      <Heading 
                      size='md' 
                      textColor="#696969" 
                      textAlign="center">Frequently Asked Questions (FAQs)</Heading>
                      <Divider borderColor="gray" mt="3%" />
                      <Image src='/faq.jpg' alt='log' h="50vh" w="100%" mt="5%"/>
                      <Divider borderColor="gray" mt="5%" />
                      </CardHeader>

                      <CardBody>
                      <Stack divider={<StackDivider />} spacing='4' w="40vw">
                              <Accordion allowToggle >
                                <AccordionItem>
                                  <h2>
                                    <AccordionButton _expanded={{ bg: 'red.500', color: 'white' }}>
                                      <Box flex='1' textAlign='left' fontWeight="semibold">
                                      Where is the gym located?
                                      </Box>
                                      <AccordionIcon />
                                    </AccordionButton>
                                  </h2>
                                  <AccordionPanel>
                                  The gym can be found in the 47 CRJM PILAR MORNING BREEZE 
                                  Brgy.085, District 1, Caloocan City, Philippines, 1400
                                  </AccordionPanel>
                                </AccordionItem>
                              </Accordion>

                              <Accordion allowToggle >
                                <AccordionItem>
                                  <h2>
                                    <AccordionButton _expanded={{ bg: 'red.500', color: 'white' }}>
                                      <Box flex='1' textAlign='left' fontWeight="semibold">
                                      Gym's opening and closing hours
                                      </Box>
                                      <AccordionIcon />
                                    </AccordionButton>
                                  </h2>
                                  <AccordionPanel>
                                  It will start at 8am onwards and will be closed at 5pm
                                  </AccordionPanel>
                                </AccordionItem>
                              </Accordion>

                              <Accordion allowToggle >
                                <AccordionItem>
                                  <h2>
                                    <AccordionButton _expanded={{ bg: 'red.500', color: 'white' }}>
                                      <Box flex='1' textAlign='left' fontWeight="semibold">
                                      How much rates do the Gym offer?
                                      </Box>
                                      <AccordionIcon />
                                    </AccordionButton>
                                  </h2>
                                  <AccordionPanel>
                                  The gym rates if the customer where onsite exercising it cost 50 pesos per day 
                                  and the customers can use all the equipment. A customer will pay a cost of 500 
                                  per month if they would like to avail the membership and paying for a cost of 30 
                                  pesos per day instead of 50 pesos for using a gym. They can request guidance 
                                  from an instructor, it is only for free.
                                  </AccordionPanel>
                                </AccordionItem>
                              </Accordion>

                              <Accordion allowToggle>
                                <AccordionItem>
                                  <h2>
                                    <AccordionButton _expanded={{ bg: 'red.500', color: 'white' }}>
                                      <Box flex='1' textAlign='left' fontWeight="semibold">
                                      How can I purchase a membership?
                                      </Box>
                                      <AccordionIcon />
                                    </AccordionButton>
                                  </h2>
                                  <AccordionPanel>
                                  In purchasing a membership, they can ask on the admin in applying a membership 
                                  and provide information about membership. Only official members can use the application.
                                  </AccordionPanel>
                                </AccordionItem>
                              </Accordion>

                              <Accordion allowToggle>
                                <AccordionItem>
                                  <h2>
                                    <AccordionButton _expanded={{ bg: 'red.500', color: 'white' }}>
                                      <Box flex='1' textAlign='left' fontWeight="semibold">
                                      Does the Gym have an age restriction or gender exception?
                                      </Box>
                                      <AccordionIcon />
                                    </AccordionButton>
                                  </h2>
                                  <AccordionPanel>
                                  Anyone can use the gym and exercise except for the age below 15-10 years old.
                                  </AccordionPanel>
                                </AccordionItem>
                              </Accordion>

                              <Accordion allowToggle>
                                <AccordionItem>
                                  <h2>
                                    <AccordionButton _expanded={{ bg: 'red.500', color: 'white' }}>
                                      <Box flex='1' textAlign='left' fontWeight="semibold">
                                      What is Augmented Reality For? 
                                      </Box>
                                      <AccordionIcon />
                                    </AccordionButton>
                                  </h2>
                                  <AccordionPanel>
                                  Augmented Reality is used to either visually alter natural environments or to provide
                                   users with additional information and possibilities visual changes. The primary 
                                   advantage of AR is that it blends digital and three-dimensional (3D) components 
                                   with a person's perception of the real world. Analyzing your surroundings and using 
                                   triggers to display relevant information in the appropriate location in your field of view. 
                                  </AccordionPanel>
                                </AccordionItem>
                              </Accordion>
                            
                              <Accordion allowToggle>
                                <AccordionItem>
                                  <h2>
                                    <AccordionButton _expanded={{ bg: 'red.500', color: 'white' }}>
                                      <Box flex='1' textAlign='left' fontWeight="semibold">
                                      How can we assure that the app has security providing personal info?
                                      </Box>
                                      <AccordionIcon />
                                    </AccordionButton>
                                  </h2>
                                  <AccordionPanel>
                                  Based on Republic Act 10173, the Data Privacy Act of 2012. 
                                  "AN ACT PROTECTING INDIVIDUAL PERSONAL INFORMATION IN INFORMATION 
                                  AND COMMUNICATIONS SYSTEMS IN THE GOVERNMENT AND THE PRIVATE SECTOR, 
                                  CREATING FOR THIS PURPOSE A NATIONAL PRIVACY COMMISSION, AND FOR OTHER PURPOSES".
                                  Yes, application has a privacy policy which can be found when registering. 
                                  We assure that it is only between the system and the customer???s matter. 
                                  </AccordionPanel>
                                </AccordionItem>
                              </Accordion>

                              <Accordion allowToggle>
                                <AccordionItem>
                                  <h2>
                                    <AccordionButton _expanded={{ bg: 'red.500', color: 'white' }}>
                                      <Box flex='1' textAlign='left' fontWeight="semibold">
                                      Contact Information
                                      </Box>
                                      <AccordionIcon />
                                    </AccordionButton>
                                  </h2>
                                  <AccordionPanel>
                                  Contact us thru our phone number (09062447988) and our 
                                  email at zamorafitnessdrive@gmail.com 
                                  or inform us on our social media account, facebook.com/zamorafitnessdriveandwellnesscenter.
                                  </AccordionPanel>
                                </AccordionItem>
                              </Accordion>



                          </Stack>

                          

                      </CardBody>
                    </Card>

                    



                    </VStack>
                  </Center>


              </Box>
            </Center>
            
          </Box>

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