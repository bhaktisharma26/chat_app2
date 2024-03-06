import { Box } from '@chakra-ui/react'
import React from 'react'
import { ChatState } from '../../../Context/ChatProvider'

const ChatBox = ({fetchAgain,setFetchAgain}) => {
  const { selectedChat } = ChatState();
  return (
    <Box
      display={{base:selectedChat?'flex':'none',md:'flex'}}
      bg={'white'}
      w={{base:'100%',md:'68%'}}
      borderRadius={"lg"}
      borderWidth={"1px"}
      p={3}
      flexDir={'column'}
    >
    </Box>
  )
}

export default ChatBox
