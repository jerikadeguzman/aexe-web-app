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
  Checkbox, 
  useToast 
} from "@chakra-ui/react";
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
import { Form, 
  FormControl, 
  FormLabel, 
  FormErrorMessage, 
  Select, 
  show, 
  InputGroup, 
  InputLeftAddon 
} from '@chakra-ui/react';
import { db } from '../firebase'
import { collection, getDocs, getDoc, where, addDoc, query } from "@firebase/firestore";
import { useEffect, useState, useContext } from "react";
import { useDisclosure } from '@chakra-ui/react'
import Router, { useRouter } from "next/router";
import React from 'react';
import CookieConsent, { Cookies } from "react-cookie-consent";
import UserDataContext from '../context/UserDataContext';


export default function Home() {
  const router = useRouter();
  const [hidePassword, setHidePassword] = useState(true);
  const [email, setEmail]= useState("")
  const [newEmail, setNewEmail] = useState("")
  const [firstname, setFirstname]= useState("");
  const [lastname, setLastname]= useState("");
  const [gender, setGender]= useState("");
  const [dateofbirth, setDateofbirth]= useState("");
  const [age, setAge]= useState("");
  const [address, setAddress]= useState("");
  const [mobilenumber, setMobilenumber]= useState("");
  const [password, setPassword] = useState("")
  const [newPassword, setNewPassword] = useState("")
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [enableRegister, setEnableRegister] = useState(false)
  const [error, setError] = useState(false);
  const [ isEmpty, setEmpty ] =  useState(false); 
  const userDataContext = useContext(UserDataContext);
  const { //modal for registration
    isOpen: isOpenAlertModal,
    onOpen: onOpenAlertModal,
    onClose: onCloseAlertModal,
  } = useDisclosure();
  const toast = useToast();
  const { //modal for terms and condition
    isOpen: isOpenCheckModal,
    onOpen: onOpenCheckModal,
    onClose: onCloseCheckModal,
  } = useDisclosure();
  
 

  const cancelRef = React.useRef()
  async function register() {
   const docRef = collection(db, "users")
    await addDoc(docRef, {  //for database
      email: newEmail,
      first_name: firstname,
      last_name: lastname,
      gender: gender,
      birthday: dateofbirth,
      age: age,
      address: address,
      mobile_number: mobilenumber,
      password: newPassword,
    }) 
    toast({
      title: "Register Successfully", //register banner chuchu
      description: "Please Login...",
      status: "success",
      duration: 2500,
      isClosable: true,
      position: "bottom-right",
    });
  }

   async function verifyLogin() {
    const verify_ref = query(  //verifying the login
      collection(db, "users"),
      where("email", "==", email)
    );

    const account = [];
    const verification = await getDocs(verify_ref);
    verification.docs.map((doc) => {
      // doc.data() is never undefined for query doc snapshots
      if (doc.data().length != 0 && doc.data().password == password) {
        router.push({  //once login direct to the dashboard
          pathname: "/dashboard",
        });
        toast({
          title: "Log in successful", //login banner chuchu
          description: "Loading dashboard...",
          status: "success",
          duration: 2500,
          isClosable: true,
          position: "bottom-right",
        });
        userDataContext.setUserData({
        dataObject: doc.data(),
        });
        localStorage.setItem("email", doc.data().email);
      } else {
        toast({
          title: "Log in failed", //if the user input is invalid
          description: "invalid input",
          status: "error",
          duration: 2500,
          isClosable: true,
          position: "bottom-right",
        });
  
      }
    });
    setEmail("");
    setPassword("");
  
  }


  return (
    <>
      <Head>
        <title>Index</title> 
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/aexelogo.png" />
      </Head>
   
      <Box
      bgImage={'/gymhd.jpg'} //bg image
      height="100vh" 
      width="100vw"
      bgSize="cover"
      >

      <Flex 
      {...styleProps.indexWrapper}>
         <Center>
         <Flex flexDirection="column" {...styleProps.formWrapper}>
          <VStack
          paddingTop="1vh" 
          >
          <Image
            borderRadius='full'
            boxSize='100px'
            src='/aexelogo.png' //logo
            alt='logo'
            marginBottom="3"
          />
          <Box>
          <Input
            shadow={"inner"} 
            bg={"white"}
            color={"black"}
            width="20vw"
            placeholder={"Email/Username"} //email user input
            onChange={(event) => setEmail(event.target.value)}
          />     
          </Box>
          <Box> 
          <Input
              type={hidePassword ? "password" : "text"}
              shadow={"inner"}
              bg={"white"}
              color={"black"}
              width="20vw"
              placeholder={"Password"} //pw user input
              onChange={(event) => setPassword(event.target.value)}
              />   
            </Box>
            <Box>

            <HStack w='full' justify='space-between'>
            <Checkbox value="Login"
                      type="submit"
                      onclick="lsRememberMe()" //remember me checkbox
                      >Remember me</Checkbox> 
            <Button colorScheme='blackAlpha' variant='link'>Forgot Password?</Button>
            </HStack>

            <CookieConsent //cookies
            debug={true}
            location="bottom"
            style={{background: '#8FAADC', color: 'black', fontSize: "14px", textAlign: "center", 
                  borderRadius: "15px", width: "500px", marginBottom: "30px", marginLeft: "20px" }}
            buttonStyle={{background: '#97302F', color:'white', borderRadius: "10px", marginBottom: "50px"}}
            onAccept={() => {alert ("Yummy, thanks!")}} 
            > 
            <Box boxSize='90px' marginLeft="180px">
            <Image src="cookies.png"  />
            </Box>
            This site uses cookies to ensure you get the best experience.
            </CookieConsent>

            <HStack //stack for login
            marginTop={"20px"}
            width="20vw"
            justifyContent="center"
            spacing={20}>
            
                <Button //login btn
                colorScheme='red' 
                width={"7vw"} 
                alignSelf={"flex-start"}
                isDisabled={ email === ""?  password ===""? true : false : false}
                onClick={() => {verifyLogin()}}
                >Login</Button>  

                <Button //modal popup for registration form
                colorScheme='red' 
                width={"7vw"} 
                alignSelf={"flex-end"}
                onClick={onOpen}
                >Register</Button> 
                                  
                      <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose} size='xl'> 
                        <ModalOverlay />
                        <ModalContent>
                          <ModalHeader 
                            align='Center'  //MODAL NUMBER 1 FOR REGISTRATION
                            fontSize='25px'>Create your account</ModalHeader>
                            <ModalCloseButton />
                            
                          <ModalBody>
                              <Box borderwidth="4px" borderRadius="lg" p={4} align="center" mt={4}>
                                <Image
                                    borderRadius='full'
                                    boxSize='100px'
                                    src='/aexelogo.png'
                                    alt='logo'
                                    marginBottom="3"/>

                                <FormControl isRequired>
                                  <HStack spacing={3}>
                                    <FormLabel>First Name</FormLabel>
                                      <Input placeholder='First Name'
                                        onChange={(event) => setFirstname(event.target.value)}/>
                                    <FormLabel>Last Name</FormLabel>
                                      <Input placeholder='Last Name'
                                        onChange={(event) => setLastname(event.target.value)} />                                        
                                  </HStack>
                                </FormControl>

                                <FormControl isRequired>
                                  <FormLabel spacing={3}>Gender</FormLabel>
                                    <Select placeholder='Select Gender'
                                      onChange={(event) => setGender(event.target.value)}>
                                        <option>Female</option>
                                        <option>Male</option>
                                    </Select>
                                </FormControl>

                                <FormControl isRequired>
                                  <HStack spacing={3} paddingTop='3'>
                                    <FormLabel>Birthdate</FormLabel>
                                      <Input
                                        placeholder="Select Date and Time"
                                        size="md"
                                        type="date"
                                        onChange={(event) => setDateofbirth(event.target.value)}/>                                        
                                    <FormLabel>Age</FormLabel>
                                      <Input placeholder='Age'
                                        onChange={(event) => setAge(event.target.value)}/>
                                    </HStack>
                                </FormControl>

                                <FormControl isReadOnly>
                                  <FormLabel>Email</FormLabel>
                                    <Input placeholder={"Email/Username"} 
                                      onChange={(event) => setNewEmail(event.target.value)}/>
                                </FormControl>

                                <FormControl isRequired>
                                  <FormLabel marginTop={3}>Password</FormLabel>
                                    <InputGroup size='md'>
                                      <Input
                                        pr='4.5rem'
                                        type={show ? 'text' : 'password'}
                                        placeholder='Enter password'
                                        onChange={(event) => setNewPassword(event.target.value)}/>
                                    </InputGroup>
                                </FormControl>

                                <FormControl isRequired>
                                  <FormLabel marginTop={3}>Address</FormLabel>
                                    <Input placeholder='Address'
                                      onChange={(event) => setAddress(event.target.value)}/>
                                </FormControl>      

                                <FormControl isRequired>
                                  <FormLabel marginTop={3}>Phone Number</FormLabel>
                                    <InputGroup>
                                      <InputLeftAddon children="+63"/>
                                      <Input type="phone" roundedLeft="0" placeholder="phone number"
                                        onChange={(event) => setMobilenumber(event.target.value)} />
                                    </InputGroup>
                                </FormControl>
                                          
                                <Center>
                                  <Checkbox paddingTop="3" alignContent="center" > I agree to the 
                                    <Button colorScheme='blackAlpha' variant='link' marginLeft={1}
                                      onClick={onOpenCheckModal} 
                                      >Terms and Condition</Button>
                                  </Checkbox>
                                </Center>
                                                                     
                              </Box>
                            </ModalBody>   

                              <ModalFooter>
                                <HStack direction='row' spacing={4}> 
                                  <Button colorScheme='red' //FOR THE BUTTON OF REGISTRATION 
                                          width={"7vw"} 
                                          alignSelf={"flex-start"} 
                                          type="submit"
                                          isDisabled ={newEmail==="" || newPassword ==="" || firstname==="" || 
                                          lastname ==="" || gender==="" || dateofbirth ==="" || age ==="" ||
                                          address==="" || mobilenumber==="" || newPassword===""? true : false}
                                          onClick={() => {register(); onClose()}}>
                                          Sign Up</Button>
                                  <Button colorScheme='red' 
                                          width={"7vw"} 
                                          alignSelf={"flex-end"}
                                          gap='4'
                                          onClick={onOpenAlertModal}> 
                                          Cancel</Button>
                                </HStack>    
                              </ModalFooter>
                        </ModalContent>
                    </Modal>

                   
                    <Modal isOpen={isOpenCheckModal} onClose={onCloseCheckModal} size="xl">
                      <ModalOverlay /> 
                      <ModalContent>
                        <ModalCloseButton />
                        <ModalHeader //MODAL NUMBER 2 FOR TERMS AND CONDITION
                        textAlign="center" >Terms and Condition & Privacy Policy</ModalHeader>
                        <ModalBody>
                        <Text as='b'> Privacy Policy </Text>
                        <Text marginTop={2} spacing={3} textAlign="justify" lineHeight={6}>
                        Methods of Research Aexe: An Augmented Reality Instructor Mobile Application 
                        On A Vigorous Lifestyle For Zamora Fitness Drive and Wellness Center 
                        built as a free application for Zamora Fitness Drive and Wellness Center customers.</Text>
                        <Text marginTop={2} spacing={3} textAlign="justify" lineHeight={6}>
                        This page is to inform visitors about the policies for collecting, using, and 
                        disclosing Personal Information if they choose to use Aexe application. 
                        If the user uses this application Aexe, then the user agrees to the collection 
                        and use of data in accordance with this policy. The application collects 
                        Personal Information in order to provide and improve the Service. 
                        Except as specified in this Privacy Policy, the application does not use or share 
                        the users information with anyone else. Unless otherwise defined in this Privacy Policy, 
                        the terminology used in this Privacy Policy have the same meaning as in our Terms and Conditions, 
                        which are available at Aexe.</Text>
                        </ModalBody>
                        <ModalFooter>
                          <Button colorScheme='red' mr={3} onClick={() => {onCloseCheckModal()}}>
                            I Agree
                          </Button> 
                        </ModalFooter>
                      </ModalContent>
                    </Modal>

                    <Modal isOpen={isOpenAlertModal} onClose={onCloseAlertModal}>
                      <ModalOverlay />
                      <ModalContent>
                        <ModalCloseButton />
                        <ModalHeader></ModalHeader>
                        <ModalBody>
                        <Text> Are you sure you want to close this? </Text>
                        </ModalBody>

                        <ModalFooter>
                          <Button colorScheme='red' mr={3} onClick={() => {onCloseAlertModal(); onClose()}}>
                            Yes
                          </Button>
                          <Button variant='ghost' onClick={onCloseAlertModal}>No</Button>
                        </ModalFooter>
                      </ModalContent>
                    </Modal>

                    

                      

            </HStack>
            </Box>   
          </VStack>
         </Flex>
         </Center>
      </Flex>
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
