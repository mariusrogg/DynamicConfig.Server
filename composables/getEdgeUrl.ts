// Generates url depending on edge name
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
