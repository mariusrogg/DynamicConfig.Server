// Extracts edge name and parameter path out of path to edge's parameters
export default function (edgePath: string | undefined) {
    let name: string | undefined
    let parameterPath: string = ""
    if (edgePath) {
        name = edgePath
        if (edgePath) {
            // Split path by first occurence of '/'
            const index: number = edgePath.indexOf('/')
            if (index >= 0) {
                name = edgePath.slice(0, index)
                parameterPath = edgePath.slice(index + 1)
            }
        }
    }
    return {
        name: name,
        parameterPath: parameterPath
    }
}