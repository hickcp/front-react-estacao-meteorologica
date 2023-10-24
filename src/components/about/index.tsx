import {
  Heading,
  ListItem,
  Text,
  UnorderedList,
  VStack,
} from '@chakra-ui/react'

const Participantes = () => {
  return (
    <VStack alignItems="flex-start" marginTop="24px" gap="16px">
      <VStack alignItems="flex-start">
        <Heading as="h2" fontSize="2xl">Sobre o projeto:</Heading>

        <Text>
          Alunos que participantes do grupo do Projeto Integrador V da UNIVESP:
        </Text>

        <UnorderedList paddingLeft="16px">
          <ListItem>Henrique</ListItem>
          <ListItem>Edvaldo</ListItem>
          <ListItem>Marlene</ListItem>
          <ListItem>Denis</ListItem>
          <ListItem>Wagner</ListItem>
          <ListItem>Rafael</ListItem>
        </UnorderedList>
      </VStack>

      <VStack alignItems="flex-start">
        <Heading as="h2" fontSize="2xl">Sobre o projeto:</Heading>
        <Text>
          Se trata de uma estação meteorólogica, onde os dados são capturados
          por um sistema IOT usando ESP32, registrados na base via API em Java e
          exibidos para o usuário por meio de gráficos exibindo a média diaria,
          mensal e anual, através desse portal.
        </Text>
      </VStack>
    </VStack>
  )
}

export default Participantes
