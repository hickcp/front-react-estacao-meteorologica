import Buttons from '../components/home/buttons'
import { Heading, Text, VStack } from '@chakra-ui/react'

export function HomePage() {



  return (
    <VStack>
      <Heading as="h1">Estação Meteorológica</Heading>
      <Text>Através da ESP32 que provém dados, você consegue consultar através desse serviço, a altitude, pressão atmosférica, umidade e temperatura.</Text>
      <Text>Escolha o tipo de consulta das informações meteorólogicas:</Text>
      <Buttons></Buttons>
      
    </VStack>
  )
}
