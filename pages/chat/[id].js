import Sidebar from '../constanst/components/Sidebar';
import { Flex, Avatar, Heading } from "@chakra-ui/react"



const Chat = () => {
    return(
      <Flex p={3} align="center" _hover={{bg: "gray.100", cursor:"pointer"}}>
            <Avatar src="" marginEnd={3}/>
            <Text>user@gmail.com</Text>
            </Flex>
        
    )
  }

  const Topbar = () => {
    return(
      <Flex bg="gray.100" h="81px" w="100%" align="center">\

        <Avatar src=""/>
        <Heading>user@gmail.com</Heading>
      </Flex>
    )

  }

export default function Chat(){
    return(

        <Flex
        h="100vh">
            <Sidebar/>
            
            <Flex bg="blue.100" flex={1}>

            </Flex>


        </Flex>
    )
}