import { describe, expect, it } from "vitest";

describe("splitEdgePath", () => {
  it.each([
    {
      expectedName: "name",
      delimiter: "/",
      expectedParameterPath: "path/to/parameter",
    },
    { expectedName: "name", delimiter: "/", expectedParameterPath: "" },
    { expectedName: "name", delimiter: "", expectedParameterPath: "" },
    { expectedName: "", delimiter: "", expectedParameterPath: "" },
  ])(
    "name: $expectedName, delimiter: $delimiter, parameterPath: $expectedParameterPath",
    ({ expectedName, delimiter, expectedParameterPath }) => {
      const { name, parameterPath } = splitEdgePath(
        expectedName + delimiter + expectedParameterPath,
      );
      expect(name).toBe(expectedName ? expectedName : undefined);
      expect(parameterPath).toBe(expectedParameterPath);
    },
  );
});
