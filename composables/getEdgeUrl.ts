// Generates url depending on edge name
/**
 * Gets edge from store and returns API-Url of the edge
 * @param name Name of the edge
 * @returns Base-Url to the API of the edge
 */
export default function (name: string | undefined): string | undefined {
  let url: string | undefined = undefined;
  if (name) {
    const edgeStore = useEdgesStore();
    const edge: IEdge | undefined = edgeStore.getEdge(name);
    if (edge) {
      url = edge.getUrl();
    }
  }
  return url;
}
