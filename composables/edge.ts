/**
 * Edge-Interface
 */
export interface IEdge {
  name: string;
  hostname: string;
  scheme: string;
  port: bigint;
  getUrl(): string | undefined;
}

/**
 * Class representing a edge-controller
 */
export class Edge implements IEdge {
  name: string;
  hostname: string;
  scheme: string;
  port: bigint;
  /**
   * Construct a new Edge
   * @param name Name of the edge
   * @param hostname Hostname of the edge
   * @param scheme URI scheme to access the edge (such as "http" or "https")
   * @param port Listning port of the edge
   */
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
  /**
   * Returns the API-Url of the edge
   * @returns String containing the API-Url of the edge or undefined, if edges hostname is not defined
   */
  getUrl(): string | undefined {
    let url: string | undefined = undefined;
    if (this.hostname) {
      url = `${this.scheme}://${this.hostname}:${this.port}`;
    }
    return url;
  }
}
