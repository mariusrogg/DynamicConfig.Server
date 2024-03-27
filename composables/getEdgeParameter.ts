// Extracts edge name and parameter path out of path to edge's parameters
/**
 * Get parameters of a edge depending on edgePath
 * @param edgePath Path to the parameter
 * @returns Edges parameters at edgePath (while edgePath = edge-name/path/to/parameter)
 */
export default function (
  edgePath: string | undefined,
): Promise<unknown> | undefined {
  const { name, parameterPath } = splitEdgePath(edgePath);
  let response: Promise<unknown> | undefined;
  if (name) {
    const url = getEdgeUrl(name);
    if (url) {
      response = $fetch(`${url}/Parameter?path=/${parameterPath}`);
    }
  }
  return response;
}
