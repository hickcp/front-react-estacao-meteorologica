import React from "react";
import { Divider, HStack, Heading, Link, VStack } from "@chakra-ui/react";
import { ColorModeSwitcher } from "../ColorModeSwitcher";

export function Header() {
  return (
    <VStack>
      <HStack
        fontSize="md"
        divider={<Divider orientation="vertical" borderWidth="3px" />}
      >
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <ColorModeSwitcher />
      </HStack>

      <Heading as="h1">About</Heading>
    </VStack>
  );
}
