export interface APIVariable {
  name: string;
  type: string;
  dataType: string;
  value: string;
}

export class Container {
  path: string;
  type: string;
  API: APIVariable[];
  constructor(path: string, type: string, API: Array<any> | undefined) {
    this.path = path;
    this.type = type;
    this.API = [];
    if (API) {
      API.forEach((apiVariable) => {
        if (
          (apiVariable.name satisfies string) &&
          (apiVariable.type satisfies string) &&
          (apiVariable.dataType satisfies string)
        ) {
          console.log(apiVariable);
        }
      });
    }
  }
  public get(): string {
    return this.path + this.type;
  }
}
