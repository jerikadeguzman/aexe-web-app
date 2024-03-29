import Head from 'next/head'
import {
  Heading,
  Center,
  Button,
  Stack,
  Text,
  Box,
  Image,
  Divider,
  SimpleGrid,
} from "@chakra-ui/react";
import { Card, CardBody, CardFooter } from '@chakra-ui/react'
import React, { useEffect, useContext } from "react";
import Router from "next/router";
import { IconButton } from '@chakra-ui/react'
import { ChevronLeftIcon } from '@chakra-ui/icons';
import TopDrawer from '../constanst/components/drawer';
import UserDataContext from '../context/UserDataContext';

export default function Messages() {
  const userDataContext = useContext(UserDataContext);
  useEffect(() => {
    setTimeout(() => {
      userDataContext.data ?
        console.log(userDataContext.data)
        :
        // Router.push("/");
        console.log("")

    }, []);
  }, []);

  return (
    <>
      <Head>
        <title>Exercises</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/aexelogo.png" />
      </Head>

      <Box as="section" maxWidth="100vw" bg="#D9D9D9" >
        <TopDrawer />

        <Center>
          <Box bg="#D9D9D9" maxWidth="100vw" h="100%" >
            <Heading marginLeft="6%" marginTop="3%" color="#97392F"> AR Exercises Information</Heading>
            <Center>
              <SimpleGrid
                marginLeft="3%"
                marginRight="3%"
                marginTop="3%"
                spacing={10}
                columns={4}
                marginBottom="5%">
                <Card maxW='sm' variant='elevated' boxShadow="2xl">
                  <CardBody>
                    <Image
                      src="/bmi.jpg"
                      borderRadius='lg' />
                    <Stack mt='6' spacing='3'>
                      <Heading size='md'>BMI</Heading>
                      <Text>
                        BMI or the Body max index is the value from the mass of a person.
                        To start exercising, you need to input the required details to compute
                        the BMI. Once it is calculated, there will be suggested exercise that
                        is appropriate for your BMI weight weight status.
                      </Text>
                    </Stack>
                  </CardBody>
                  <Divider />
                  <CardFooter>
                    <Button
                      variant='solid'
                      bgColor="#696969"
                      textColor="white"
                      onClick={() => Router.push("../exercises/bmi")}>
                      View
                    </Button>
                  </CardFooter>
                </Card>

                <Card maxW='sm' variant='elevated' boxShadow="2xl">
                  <CardBody>
                    <Image
                      src="/fullbody.jpg"
                      borderRadius='lg' />
                    <Stack mt='6' spacing='3'>
                      <Heading size='md'>Full Body</Heading>
                      <Text>A full-body workout's primary objective is to focus on all
                        of your muscle groups in order to effectively
                        and efficiently encourage muscle growth.  </Text>
                    </Stack>
                  </CardBody>
                  <Divider />
                  <CardFooter>
                    <Button
                      variant='solid'
                      bgColor="#696969"
                      textColor="white"
                      onClick={() => Router.push("../exercises/fullbody")}>
                      View
                    </Button>
                  </CardFooter>
                </Card>

                <Card maxW='sm' variant='elevated' boxShadow="2xl">
                  <CardBody>
                    <Image
                      src="/lowerbody.jpg"
                      borderRadius='lg' />
                    <Stack mt='6' spacing='3'>
                      <Heading size='md'>Lower Body</Heading>
                      <Text>Lower-body workouts are meant to strengthen
                        the legs, glutes, lower back, and hips. </Text>
                    </Stack>
                  </CardBody>
                  <Divider />
                  <CardFooter>
                    <Button
                      variant='solid'
                      bgColor="#696969"
                      textColor="white"
                      onClick={() => Router.push("../exercises/lowerbody")}>
                      View
                    </Button>
                  </CardFooter>
                </Card>

                <Card maxW='sm' variant='elevated' boxShadow="2xl">
                  <CardBody>
                    <Image
                      src="/legbutt.jpg"
                      borderRadius='lg' />
                    <Stack mt='6' spacing='3'>
                      <Heading size='md'>Leg and Butt</Heading>
                      <Text>Leg exercises work all of the major muscular groups in your body,
                        which promotes healthy movement patterns in daily life
                        and enhances overall athletic performance. </Text>
                    </Stack>
                  </CardBody>
                  <Divider />
                  <CardFooter>
                    <Button
                      variant='solid'
                      bgColor="#696969"
                      textColor="white"
                      onClick={() => Router.push("../exercises/legandbutt")}>
                      View
                    </Button>
                  </CardFooter>
                </Card>

                <Card maxW='sm' variant='elevated' boxShadow="2xl">
                  <CardBody>
                    <Image
                      src="/abs.jpg"
                      borderRadius='lg' />
                    <Stack mt='6' spacing='3'>
                      <Heading size='md'>Abs</Heading>
                      <Text>Ab exercises serve to strengthen the
                        muscles that surround the spine and
                        improve posture since the body's weight is distributed evenly.
                      </Text>
                    </Stack>
                  </CardBody>
                  <Divider />
                  <CardFooter>
                    <Button
                      variant='solid'
                      bgColor="#696969"
                      textColor="white"
                      onClick={() => Router.push("../exercises/abs")}>
                      View
                    </Button>
                  </CardFooter>
                </Card>

                <Card maxW='sm' variant='elevated' boxShadow="2xl">
                  <CardBody>
                    <Image
                      src="/chest.png"
                      borderRadius='lg' />
                    <Stack mt='6' spacing='3'>
                      <Heading size='md'>Chest</Heading>
                      <Text>Exercises for the chest muscles are done to keep the
                        body strong and healthy while also promoting muscle growth.</Text>
                    </Stack>
                  </CardBody>
                  <Divider />
                  <CardFooter>
                    <Button
                      variant='solid'
                      bgColor="#696969"
                      textColor="white"
                      onClick={() => Router.push("../exercises/chest")}>
                      View
                    </Button>
                  </CardFooter>
                </Card>

                <Card maxW='sm' variant='elevated' boxShadow="2xl">
                  <CardBody>
                    <Image
                      src="/shoulderback.jpg"
                      borderRadius='lg' />
                    <Stack mt='6' spacing='3'>
                      <Heading size='md'>Shoulder</Heading>
                      <Text>A shoulder and back training regimen is intended to develop broad,
                        enormous shoulder muscles and a muscular, powerful back.</Text>
                    </Stack>
                  </CardBody>
                  <Divider />
                  <CardFooter>
                    <Button
                      variant='solid'
                      bgColor="#696969"
                      textColor="white"
                      onClick={() => Router.push("../exercises/shoulderandback")}>
                      View
                    </Button>
                  </CardFooter>
                </Card>

                <Card maxW='sm' variant='elevated' boxShadow="2xl">
                  <CardBody>
                    <Image
                      src="/senior.jpg"
                      borderRadius='lg' />
                    <Stack mt='6' spacing='3'>
                      <Heading size='md'>Senior Citizen</Heading>
                      <Text>A exercises for senior citizens</Text>
                    </Stack>
                  </CardBody>
                  <Divider />
                  <CardFooter>
                    <Button
                      variant='solid'
                      bgColor="#696969"
                      textColor="white"
                      onClick={() => Router.push("../exercises/seniorcitizen")}>
                      View
                    </Button>
                  </CardFooter>
                </Card>



              </SimpleGrid>
            </Center>


          </Box>
        </Center>
      </Box>
    </>
  )
}