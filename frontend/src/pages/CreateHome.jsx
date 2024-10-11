import { Container, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'

const CreateHome = () => {
  const [newProduct, setNewProduct] = useState({
    name: '',
    price: '',
    image: ''
  })

  return (
    <Container maxW={'container.sm'}>
      <VStack
        spacing={8}

      >

      </VStack>
    </Container>
  )
}

export default CreateHome
