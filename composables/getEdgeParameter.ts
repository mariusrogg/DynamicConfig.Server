// Extracts edge name and parameter path out of path to edge's parameters
export default function (edgePath: string | undefined) : Promise<unknown> | undefined {
    const { name, parameterPath } = splitEdgePath(edgePath)
    let response: Promise<unknown> | undefined
    if (name) {
        // ToDo: get hostname by name
        response = $fetch(`http://${name}/Parameter?path=/${parameterPath}`)
    }
    return response
}