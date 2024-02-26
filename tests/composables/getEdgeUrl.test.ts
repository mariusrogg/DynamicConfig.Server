import { describe, expect, it, beforeEach, vi } from "vitest";
import { createTestingPinia } from "@pinia/testing";
import { setActivePinia } from "pinia";
import { useEdgesStore, type Edge } from "@/stores/edges";

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
        : { name: "name", hostname: "hostname", scheme: "http", port: 80n };
      vi.mocked(edgeStore.getEdge).mockReturnValue(edge);

      const url: string | undefined = getEdgeUrl(name);
      expect(url).toBe(
        name && edge
          ? `${edge.scheme}://${edge.hostname}:${edge.port}`
          : undefined,
      );
      expect(edgeStore.getEdge).toHaveBeenCalledTimes(name ? 1 : 0);
      if (name) {
        expect(edgeStore.getEdge).toHaveBeenCalledWith(name);
      }
    },
  );
});
