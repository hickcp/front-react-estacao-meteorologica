interface IpifyJson {
  ip: string
}

export function getPublicIp(): Promise<string> {
  return fetch('https://api.ipify.org?format=json')
    .then<IpifyJson>((resp) => resp.json())
    .then((resp) => resp.ip)
}
