import { VStack, Text, Button } from '@chakra-ui/react';
import { useState } from 'react';
import { getDadoAtual } from '../../../../services/api';

export function Atual() {
  const [data, setData] = useState<String>();
  const [pressao, setPressao] = useState<number>();
  const [altitude, setAltitude] = useState<number>();
  const [temperatura, setTemperatura] = useState<number>();
  const [umidade, setUmidade] = useState<number>();

  const fetchDados = async () => {
    getDadoAtual().then(resp => {
      setData(resp.dataRegistro.toString());
      setPressao(resp.pressao);
      setAltitude(resp.altitude);
      setTemperatura(resp.temperatura);
      setUmidade(resp.umidade);
    });
  };

  return (
    <VStack>
      <Button marginTop={5} onClick={fetchDados}>
        {' '}
        Atualizar{' '}
      </Button>
      <Text>Data: {data}</Text>
      <Text>Pressão: {pressao}</Text>
      <Text>Altitude: {altitude}</Text>
      <Text>Temperatura: {temperatura}</Text>
      <Text>Umidade: {umidade}</Text>
    </VStack>
  );
}
