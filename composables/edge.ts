export class Edge {
  hostname: string;
  scheme: string;
  port: bigint;
  constructor(hostname: string, scheme: string = "http", port: bigint = 80n) {
    this.hostname = hostname;
    this.scheme = scheme;
    this.port = port;
  }
  public getUrl(): string | undefined {
    let url: string | undefined = undefined;
    if (this.hostname) {
      url = `${this.scheme}://${this.hostname}:${this.port}`;
    }
    return url;
  }
  public fetchContainers(): any {
    const containers: Array<Container> = [];
    const url: string | undefined = this.getUrl();
    if (url) {
      const { data } = useFetch(this.getUrl() + "/Containers");
      const containerConfig: string = data.value as string;
      const jsonContainers = JSON.parse(containerConfig);
      if (jsonContainers satisfies Array<any>) {
        for (const jsonContainer of jsonContainers) {
          if (
            (jsonContainer.path satisfies string) &&
            (jsonContainer.type satisfies number) &&
            ((jsonContainer.API satisfies Array<any>) ||
              (jsonContainer.API satisfies undefined))
          ) {
            const container: Container = new Container(
              jsonContainer.path,
              jsonContainer.type,
              jsonContainer.API,
            );
            containers.push(container);
          }
        }
      } else {
        // throw "no data";
      }
    }
    return containers;
  }
}
