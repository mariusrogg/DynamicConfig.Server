import { describe, expect, it, afterEach, vi, beforeEach } from "vitest";
import { clearFetchMock, createFetchMock } from "./fetchMock";
import { splitEdgePath } from "#imports";

describe('getEdgeParameter', () => {
    beforeEach(() => {
    })
    afterEach(() => {
        clearFetchMock()
        vi.clearAllMocks()
    })
    it.each([
        {expectedName: "name", delimiter: "/", expectedParameterPath : "path/to/parameter"},
        {expectedName: "name", delimiter: "/", expectedParameterPath : ""},
        {expectedName: "name", delimiter: "", expectedParameterPath : ""},
        {expectedName: "", delimiter: "", expectedParameterPath : ""}
    ])("name: $expectedName, delimiter: $delimiter, parameterPath: $expectedParameterPath", ({expectedName, delimiter, expectedParameterPath}) => {
            const expectedResponse = { test: "test" }

            const mock = vi.mock('../composables/splitEdgePath')
            vi.mocked(splitEdgePath).mockReturnValue({name: expectedName, parameterPath: expectedParameterPath})

            createFetchMock((url: unknown) : any => {
                expect(url).toBe(`http://${expectedName}/Parameter?path=/${expectedParameterPath}`)
                return expectedName ? expectedResponse : undefined
            })

            const response: any = getEdgeParameter(expectedName + delimiter + expectedParameterPath)

            expect(mock).toHaveBeenCalledTimes(1)
            expect(response).toBe(expectedName ? expectedResponse : undefined)
        })
})