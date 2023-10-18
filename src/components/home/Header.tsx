import React from "react";
import { Divider, HStack, Heading, Link, VStack, Image } from "@chakra-ui/react";
import { ColorModeSwitcher } from "../../ColorModeSwitcher";

import './Header.css'
export function Header() {
  return (
    <VStack>
      <HStack className="Hstack"
        fontSize="md"
        divider={<Divider orientation="vertical"/>}
      >
        <Image className="logo" src = '/png/logo-univesp_completo_cor-positivo.png'></Image>
          <Link href="/">Início</Link>
          <Link href="/about">Sobre</Link>
        <ColorModeSwitcher />
      </HStack>
    </VStack>
  );
}
