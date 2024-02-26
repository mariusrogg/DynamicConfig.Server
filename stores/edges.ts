export const useEdgesStore = defineStore('edges', {
    state: () => ({
        edges: [
            {
                name: "undefined",
                hostname: "esp32-0a58d8",
                scheme: "http",
                port: 80n
            }
        ] as Edge[]
    }),
    actions: {
        getEdge(name: string): Edge | undefined {
            return this.edges.find(e => e.name == name)
        }
    }
})

export interface Edge {
    name: string,
    hostname: string,
    scheme: string,
    port: bigint
}