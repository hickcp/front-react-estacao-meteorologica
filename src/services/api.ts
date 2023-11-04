interface IpifyJson {
  ip: string;
}

interface DadosAtualJson {
  id: number;
  altitude: number;
  umidade: number;
  pressao: number;
  temperatura: number;
  dataRegistro: Date;
  nomeIot: string;
}

export interface DadoMediaJson {
  dataDia: Date;
  pressaoMedia: number;
  altitudeMedia: number;
  temperaturaMedia: number;
  umidadeMedia: number;
}

export function getPublicIp(): Promise<string> {
  return fetch('https://api.ipify.org?format=json')
    .then<IpifyJson>(resp => resp.json())
    .then(resp => resp.ip);
}

export function getDadoAtual(): Promise<DadosAtualJson> {
  return fetch('http://localhost:8080/dados/atual/1')
    .then(resp => {
      if (!resp.ok) {
        throw new Error(
          `Erro na requisição: ${resp.status} ${resp.statusText}`
        );
      }
      return resp.json();
    })
    .then(resp => resp as DadosAtualJson)
    .catch(error => {
      console.error('Erro ao obter dados atuais:', error);
      throw error; // Rejeita a promise para que o erro seja propagado
    });
}
export function getDadoMedia(
  periodo: String,
  datainicio: String,
  datafim: String
): Promise<DadoMediaJson[]> {
  return fetch(
    `http://localhost:8080/dados/${periodo}?dataInicio=${datainicio}&dataFim=${datafim}&idIot=1`
  )
    .then(resp => {
      if (!resp.ok) {
        throw new Error(
          `Erro na requisição: ${resp.status} ${resp.statusText}`
        );
      }
      return resp.json();
    })
    .then(resp => resp as DadoMediaJson[])
    .catch(error => {
      console.error('Erro ao obter dados atuais:', error);
      throw error; // Rejeita a promise para que o erro seja propagado
    });
}
