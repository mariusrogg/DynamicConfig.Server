export interface IEdge {
  name: string;
  hostname: string;
  scheme: string;
  port: bigint;
  getUrl(): string | undefined;
}

export class Edge implements IEdge {
  name: string;
  hostname: string;
  scheme: string;
  port: bigint;
  constructor(
    name: string,
    hostname: string,
    scheme: string = "http",
    port: bigint = 80n,
  ) {
    this.name = name;
    this.hostname = hostname;
    this.scheme = scheme;
    this.port = port;
  }
  getUrl(): string | undefined {
    let url: string | undefined = undefined;
    if (this.hostname) {
      url = `${this.scheme}://${this.hostname}:${this.port}`;
    }
    return url;
  }
}
