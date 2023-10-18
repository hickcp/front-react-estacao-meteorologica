import React from 'react'

import { VStack } from '@chakra-ui/react'
import { Header } from '../components/home/Header'
import Participantes from '../components/about'




export function About() {
  return (
    <VStack>
      <Header></Header>
      <Participantes></Participantes>
    </VStack>
  )
}
