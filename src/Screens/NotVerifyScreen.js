import React from 'react';
import { Box, Button, Center, Image, Text,VStack,View } from 'native-base';
import Colors from '../color';
import Buttons from '../Components/Buttons';

function NotVerifyScreen() {
  return (
   <Box flex={1} bg={Colors.deepGray} safeAreaTop>
    <Center w="full" h={250}>
      <Image source={require("../../assets/favicon.png")}
      alt="Logo"
      size="lg"
      />
    </Center>
    <VStack space={6} px={5} alignItems="center">
      <Buttons bg={Colors.black} color={Colors.white}>
        REGISTRAR
      </Buttons>

      <Buttons bg={Colors.gray} color={Colors.white}>
        LOGIN
      </Buttons>
    </VStack>
   </Box>
  );
}

export default NotVerifyScreen;