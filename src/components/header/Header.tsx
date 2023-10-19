import React from 'react'
import { Divider, HStack, Image } from '@chakra-ui/react'
import { ColorModeSwitcher } from '../../ColorModeSwitcher'
import { Link } from 'react-router-dom'

export function Header() {
  return (
    <HStack
      alignItems="center"
      width="100%"
      fontSize="md"
      divider={<Divider orientation="vertical" />}
    >
      <Image
        width="100px"
        src="/png/logo-univesp_completo_cor-positivo.png"
      ></Image>
      <Link to="/">Início</Link>
      <Link to="/about">Sobre</Link>
      <ColorModeSwitcher />
    </HStack>
  )
}
