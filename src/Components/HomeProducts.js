import { Box, Flex, Heading, Image, Pressable, ScrollView, Text } from 'native-base'
import React from 'react'
import productos from '../data/products';
import Colors from '../color';

function HomeProducts() {
  return (
    <ScrollView flex={1}>
      <Flex 
      flexWrap="wrap"
      direction="row"
      justifyContent="space-between"
      px={6}
      >
        {
          productos.map((productos) => (
           <Pressable key={productos._id}
           w="47%"
           bg={Colors.white}
           rounded="md"
           shadow={2}
           pt={0.3}
           my={3}
           pb={2}
           overflow="hidden"
           >
            <Image source={{uri:productos.image}} 
            alt={productos.name} 
            w="full" 
            h={24} 
            resizeMode="contain"
            />
            <Box px={4} pt={1}>
              <Heading size="sm" bold>
                S/.{productos.price}
              </Heading>
              <Text fontSize={10} mt={1} isTruncated w="full">
                {productos.name}
              </Text>
            </Box>
           </Pressable>
          ))
        }
      </Flex>
    </ScrollView>
  )
}

export default HomeProducts;