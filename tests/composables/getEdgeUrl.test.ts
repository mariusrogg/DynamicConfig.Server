import { describe, expect, it, beforeEach, vi } from "vitest";
import { createTestingPinia } from "@pinia/testing";
import { setActivePinia } from "pinia";
import { useEdgesStore } from "@/stores/edges";
import { Edge } from "#imports";

describe("getEdgeUrl", () => {
  beforeEach(() => {
    setActivePinia(createTestingPinia({ createSpy: vi.fn }));
  });
  it.each([
    { name: "name", undefinedEdge: true },
    { name: "", undefinedEdge: true },
    { name: undefined, undefinedEdge: true },
    { name: "name", undefinedEdge: false },
    { name: "", undefinedEdge: false },
    { name: undefined, undefinedEdge: false },
  ])(
    "name: $name, undefinedEdge: $undefinedEdge",
    ({ name, undefinedEdge }) => {
      const edgeStore = useEdgesStore();
      const edge: Edge | undefined = undefinedEdge
        ? undefined
        : new Edge("name", "hostname", "http", 80n);
      const edgeUrl: string | undefined = edge
        ? `${edge.scheme}://${edge.hostname}:${edge.port}`
        : undefined;

      vi.mocked(edgeStore.getEdge).mockReturnValue(edge);

      vi.mock("@/composables/edge");
      if (edge) {
        vi.mocked(edge.getUrl).mockReturnValue(edgeUrl);
      }

      const url: string | undefined = getEdgeUrl(name);
      expect(url).toBe(name && edge ? edgeUrl : undefined);
      expect(edgeStore.getEdge).toHaveBeenCalledTimes(name ? 1 : 0);
      if (name) {
        expect(edgeStore.getEdge).toHaveBeenCalledWith(name);
      }
    },
  );
});
