import { Container, Input, Heading, Box, VStack, Button } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useProductStore } from '../store/product.js'

const CreateHome = () => {
  const [newProduct, setNewProduct] = useState({
    name: '',
    price: '',
    image: ''
  })
  const {createProduct} = useProductStore()
  const handleNewProduct = async() => {
    const {sucess, message} = await createProduct(newProduct)
    console.log(sucess)
    console.log(message)
  }

  return (
    <Container maxW={'container.sm'}>
      <VStack
        spacing={8}

      >
        <Heading as={'h1'} color={'white'} size={'2xl'} textAlign={'center'} mb={8}>
          Create New Product
        </Heading>

        <Box
          w={'full'} bg={'rgb(46, 33, 82)'}
          p={6} rounded={'lg'} shadow={'md'}
        >
          <VStack spacing={4}
              bg={'rgb(46, 33, 82)'}
          >
            <Input
              bg={'rgb(46, 33, 82)'}
              placeholder='Product name'
              name='name'
              value={newProduct.name}
              color={'white'}
              onChange={(e) => setNewProduct({...newProduct, name: e.target.value})}
            />
            <Input
              color={'white'}
              placeholder='Product price'
              bg={'rgb(46, 33, 82)'}
              name='price'
              value={newProduct.price}
              onChange={(e) => setNewProduct({...newProduct, price: e.target.value})}
            />
            <Input 
              placeholder='Image URL'
              color={'white'}
              bg={'rgb(46, 33, 82)'}
              name='image'
              value={newProduct.image}
              onChange={(e) => setNewProduct({...newProduct, image: e.target.value})}
            />

            <Button colorScheme='blue' onClick={handleNewProduct} w='full'>
              Add Product
            </Button>
          </VStack>
        </Box>
      </VStack>
    </Container>
  )
}

export default CreateHome
