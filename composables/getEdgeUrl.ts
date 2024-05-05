import type { Edge } from "./edge";

export default function (name: string | undefined): string | undefined {
  let url: string | undefined = undefined;
  if (name) {
    const edgeStore = useEdgesStore();
    const edge: Edge | undefined = edgeStore.getEdgeByName(name);
    if (edge) {
      url = edge.getUrl();
    }
  }
  return url;
}
