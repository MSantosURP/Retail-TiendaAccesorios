import React from 'react';
import { Box, Button, Heading, Image, Input, Pressable, Text,VStack,View } from 'native-base';
import Colors from '../color';
import { MaterialIcons } from '@expo/vector-icons';
function LoginScreen() {
  return (
   <Box flex={1} bg={Colors.black}>
    <Image 
    flex={1} 
    alt="Logo"
    resizeMode='cover'
    size="lg"
    w="full"
    source={require("../../assets/cover.png")}
    />
    <Box 
    w="full"
    h="full"
    position="absolute"
    top="0"
    px="6"
    justifyContent="center"
    >
      <Heading color={Colors.deepestGray}>LOGIN</Heading>
      <VStack space={5} pt="6">
        <Input 
        InputLeftElement={<MaterialIcons name="email" size={20} color={Colors.deepestGray}/>}
        variant="underlined" 
        placeholder=" usuario@gmail.com" 
        w="70%" 
        pl={2}
        borderBottomColor={Colors.underLine}
        color={Colors.deepestGray}
        />

      <Input 
        InputLeftElement={<MaterialIcons name="remove-red-eye" size={20} color={Colors.deepestGray}/>}
        variant="underlined" 
        placeholder=" ******" 
        w="70%" 
        type="password"
        pl={2}
        borderBottomColor={Colors.underLine}
        color={Colors.deepestGray}
        />
      </VStack>
      <Button 
      _pressed={{
        bg:Colors.gray,
      }}
      my={25}
      w="40%"
      rounded={50}
      bg={Colors.gray}
      >LOGIN
      </Button>
      <Pressable mt={4}>
        <Text color={Colors.deepGray}>REGISTRAR</Text>
      </Pressable>

    </Box>
   </Box>
  );
}

export default LoginScreen;