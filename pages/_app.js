import { ChakraProvider, Flex } from "@chakra-ui/react";
import THEME_DATA from "../constanst/data/themes/theme_data";
import { UserDataContextProvider } from '../context/UserDataContext';
import Sidebar from "../constanst/components/Sidebar";
//import { useAuthState } from 'react-firebase-hooks/auth';
//import { auth } from "../firebaseconfig";
//import {Spinner, Center } from "@chakra-ui/react";



function MyApp({ Component, pageProps }) {

  return (
    <ChakraProvider theme={THEME_DATA}>
      <UserDataContextProvider>
      <Component {...pageProps} />
      </UserDataContextProvider>
    </ChakraProvider>

    

  );
}

export default MyApp;
