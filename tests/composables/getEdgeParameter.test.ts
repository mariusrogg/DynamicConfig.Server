import { describe, expect, it, afterEach, vi, beforeEach } from "vitest";
import { clearFetchMock, createFetchMock } from "@/tests/fetchMock";
import { setActivePinia } from "pinia";
import { createTestingPinia } from "@pinia/testing";

describe("getEdgeParameter", () => {
  beforeEach(() => {
    setActivePinia(createTestingPinia({ createSpy: vi.fn }));
  });
  afterEach(() => {
    clearFetchMock();
    vi.clearAllMocks();
  });
  it.each([
    {
      expectedName: "name",
      delimiter: "/",
      expectedParameterPath: "path/to/parameter",
    },
    { expectedName: "name", delimiter: "/", expectedParameterPath: "" },
    { expectedName: "name", delimiter: "", expectedParameterPath: "" },
    { expectedName: "", delimiter: "", expectedParameterPath: "" },
    { expectedName: undefined, delimiter: "/", expectedParameterPath: "" },
  ])(
    "name: $expectedName, delimiter: $delimiter, parameterPath: $expectedParameterPath",
    ({ expectedName, delimiter, expectedParameterPath }) => {
      const expectedResponse = { test: "test" };
      const baseUrl: string = "http://test:80";

      const mockSplitEdgePath = vi.mock("@/composables/splitEdgePath");
      vi.mocked(splitEdgePath).mockReturnValue({
        name: expectedName,
        parameterPath: expectedParameterPath,
      });

      const mockGetEdgeUrl = vi.mock("@/composables/getEdgeUrl");
      vi.mocked(getEdgeUrl).mockReturnValue(baseUrl);

      createFetchMock((url: unknown): any => {
        expect(url).toBe(`${baseUrl}/Parameter?path=/${expectedParameterPath}`);
        return expectedName ? expectedResponse : undefined;
      });

      const response: any = getEdgeParameter(
        expectedName + delimiter + expectedParameterPath,
      );

      expect(mockSplitEdgePath).toHaveBeenCalledTimes(1);
      expect(mockSplitEdgePath).toHaveBeenCalledWith(
        expectedName + delimiter + expectedParameterPath,
      );

      expect(mockGetEdgeUrl).toHaveBeenCalledTimes(expectedName ? 1 : 0);
      if (expectedName) {
        expect(mockGetEdgeUrl).toHaveBeenCalledWith(expectedName);
      }

      expect(response).toBe(expectedName ? expectedResponse : undefined);
    },
  );
});
