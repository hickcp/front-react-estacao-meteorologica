import { Divider, HStack, VStack } from "@chakra-ui/react";
import './Participantes.css'
const Participantes = () => {
  return (
    
    <VStack>
      <HStack
        fontSize="md"
        divider={<Divider orientation="vertical" borderWidth="3px" />}
      >
       
       
      </HStack>
      <div className="sobreParticipantes">
        <p>Alunos que participantes do grupo do Projeto Integrador V da UNIVESP:</p>

        <li>Henrique</li>
        <li>Edvaldo</li>
        <li>Marlene</li>
        <li>Denis</li>
        <li>Wagner</li>
      </div>
      <div className="sobreProjeto">
        <h2>Sobre o projeto:</h2>
        <p>Se trata de uma estação meteorólogica, onde os dados são capturados por um sistema 
            IOT usando ESP32, registrados na base via API em Java e exibidos para o usuário por 
            meio de gráficos exibindo a média diaria, mensal e anual, através desse portal.
        </p>
      </div>
      
    </VStack>
    
  );
}

export default Participantes
