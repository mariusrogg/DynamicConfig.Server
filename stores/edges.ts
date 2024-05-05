import { Edge } from "#imports";

export const useEdgesStore = defineStore("edges", {
  state: () => ({
    edges: new Map<string, Edge>() as Map<string, Edge>,
  }),
  getters: {
    getEdgeByName: (state) => {
      return (name: string): Edge | undefined => state.edges.get(name);
    },
  },
});
