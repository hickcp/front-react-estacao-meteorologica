import { useState } from 'react';
import {
  VStack,
  Text,
  HStack,
  Input,
  Button,
  Alert,
  AlertIcon
} from '@chakra-ui/react';
import { getDadoMedia, DadoMediaJson } from '../../../../services/api';
import {
  AreaChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Area
} from 'recharts';

const Anual = () => {
  const [dados, setDados] = useState<DadoMediaJson[]>();
  const [dataIda, setDataIda] = useState<String>();
  const [dataVolta, setDataVolta] = useState<String>();

  function handleDataIdaChange(event: React.ChangeEvent<HTMLInputElement>) {
    const value = event.target.value;
    setDataIda(value);
  }

  function handleDataVoltaChange(event: React.ChangeEvent<HTMLInputElement>) {
    const value = event.target.value;
    setDataVolta(value);
  }

  const fetchDados = async () => {
    getDadoMedia('anual', dataIda ?? '', dataVolta ?? '').then(resp => {
      setDados(resp);
    });
  };

  return (
    <VStack>
      <Text marginBottom={5} marginTop={5}>
        Selecione o período para média anual:
      </Text>
      <HStack marginBottom={5}>
        <Text>De:</Text>
        <Input
          placeholder="Selecione a data inicio"
          size="md"
          type="date"
          onChange={handleDataIdaChange}
        ></Input>
        <Text>Até:</Text>
        <Input
          placeholder="Selecione a data de fim"
          size="md"
          type="date"
          onChange={handleDataVoltaChange}
        ></Input>
      </HStack>
      <Button onClick={fetchDados}> Pesquisar </Button>
      <AreaChart
        width={1030}
        height={250}
        data={dados}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
      >
        <defs>
          <linearGradient id="colorPressaoMedia" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="purple" stopOpacity={0.8} />
            <stop offset="95%" stopColor="purple" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="colorAltitudeMedia" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="rgb(0, 255, 0)" stopOpacity={0.8} />
            <stop offset="95%" stopColor="rgb(0, 255, 0)" stopOpacity={0} />
          </linearGradient>
          <linearGradient
            id="colorTemperaturaMedia"
            x1="0"
            y1="0"
            x2="0"
            y2="1"
          >
            <stop offset="5%" stopColor="rgb(255, 0, 0)" stopOpacity={0.8} />
            <stop offset="95%" stopColor="rgb(255, 0, 0)" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="colorUmidadeMedia" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="rgb(0, 0, 255)" stopOpacity={0.8} />
            <stop offset="95%" stopColor="rgb(0, 0, 255)" stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis dataKey="dataDia" />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="pressaoMedia"
          name="Pressão Média"
          stroke="purple"
          fillOpacity={1}
          fill="url(#colorPressaoMedia)"
        />
        <Area
          type="monotone"
          dataKey="altitudeMedia"
          name="Altitude Média"
          stroke="rgb(0, 255, 0)"
          fillOpacity={1}
          fill="url(#colorAltitudeMedia)"
        />
        <Area
          type="monotone"
          dataKey="temperaturaMedia"
          name="Temperatura Média"
          stroke="rgb(255, 0, 0)"
          fillOpacity={1}
          fill="url(#colorTemperaturaMedia)"
        />
        <Area
          type="monotone"
          dataKey="umidadeMedia"
          name="Umidade Média"
          stroke="rgb(0, 0, 255)"
          fillOpacity={0.3}
          fill="url(#colorUmidadeMedia)"
        />
      </AreaChart>
    </VStack>
  );
};

export default Anual;
