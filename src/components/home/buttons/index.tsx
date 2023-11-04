import React, { useState } from 'react';
import { Atual } from './periodos/Atual';
import { HStack, Button, ButtonGroup, VStack } from '@chakra-ui/react';
import Diaria from './periodos/Diaria';
import Mensal from './periodos/Mensal';
import Anual from './periodos/Anual';

const Buttons = () => {
  const [selecionado, setSelecionado] = useState<number | null | string>(null);
  const [periodo, setPeriodo] = useState<string>('');
  const handleClique = (indice: number) => {
    setSelecionado(indice === selecionado ? null : indice);
  };

  const botoes = [
    { label: 'Atual', color: 'teal' },
    { label: 'Diária', color: 'teal' },
    { label: 'Mensal', color: 'teal' },
    { label: 'Anual', color: 'teal' }
  ];

  return (
    <VStack>
      <HStack spacing={'34px'}>
        <ButtonGroup spacing={'15px'}>
          {botoes.map((botao, indice) => (
            <Button
              key={indice}
              onClick={() => {
                handleClique(indice);
                setPeriodo(botao.label);
              }}
              variant={selecionado === indice ? 'solid' : 'outline'}
              colorScheme={botao.color}
              bg={selecionado === indice ? `${botao.color}.500` : 'transparent'}
              _hover={{ bg: `${botao.color}.400` }}
            >
              {botao.label}
            </Button>
          ))}
        </ButtonGroup>
      </HStack>
      {periodo === 'Atual' && <Atual />}
      {periodo === 'Diária' && <Diaria />}
      {periodo === 'Mensal' && <Mensal />}
      {periodo === 'Anual' && <Anual />}
    </VStack>
  );
};

export default Buttons;
