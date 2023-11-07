import React, { useEffect, useState } from 'react';
import { HStack, Image, Text } from '@chakra-ui/react';
import { ColorModeSwitcher } from '../../ColorModeSwitcher';
import { Link } from 'react-router-dom';
import { getPublicIp } from '../../services/api';

export function Header() {
  return (
    <HStack
      alignItems="center"
      width="100%"
      fontSize="md"
      gap="16px"
      justifyContent="space-between"
    >
      <HStack gap="16px">
        <Image
          width="100px"
          src="/png/logo-univesp_completo_cor-positivo.png"
        ></Image>
        <Link to="/">Início</Link>
        <Link to="/about">Sobre</Link>
      </HStack>

      <HStack>
        <ColorModeSwitcher />
      </HStack>
    </HStack>
  );
}
