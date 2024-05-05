export default function (edgePath: string | undefined): any {
  const { name, parameterPath } = splitEdgePath(edgePath);
  let response: any;
  if (name) {
    const url = getEdgeUrl(name);
    if (url) {
      const { data } = useFetch(`${url}/Parameter?path=/${parameterPath}`);
      response = data;
    }
  }
  return response;
}
