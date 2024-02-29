export const useEdgesStore = defineStore("edges", {
  state: () => ({
    edges: [new Edge("undefined", "esp32-0a58d8")] as IEdge[],
  }),
  actions: {
    getEdge(name: string): IEdge | undefined {
      return this.edges.find((e) => e.name == name);
    },
  },
});
