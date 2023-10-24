interface IpifyJson {
  ip: string
}

interface DadosJson {
  data: Date,
  pressao: number,
  altitude: number,
  temperatura: number,
  umidade: number
}

export function getPublicIp(): Promise<string> {
  return fetch('https://api.ipify.org?format=json')
    .then<IpifyJson>((resp) => resp.json())
    .then((resp) => resp.ip)
}



export function getDadoAtual(): Promise<DadosJson> {
  return fetch('localhost:8080/dados/diaria?dataInicio=2023-08-20&dataFim=2023-10-19&idIot=1')
    .then<DadosJson>((resp) => resp.json())
    .then((resp) => resp)
}
