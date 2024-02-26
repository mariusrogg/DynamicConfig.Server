import { beforeEach, describe, expect, it } from "vitest";
import { setActivePinia, createPinia } from 'pinia'


describe('Edge store', () => {
    beforeEach(() => {
        setActivePinia(createPinia())
        const store = useEdgesStore()
        store.edges = [
            { name: "name", hostname: "hostname", scheme: "http", port: 80n },
            { name: "test", hostname: "hostname", scheme: "https", port: 80n },
            { name: "secure", hostname: "test", scheme: "https", port: 443n }
        ]
    }),
    describe('getEdge', () => {
        it.each([
            { name: "name", hostname: "hostname", scheme: "http", port: 80n },
            { name: "test", hostname: "hostname", scheme: "https", port: 80n },
            { name: "secure", hostname: "test", scheme: "https", port: 443n }
        ])('Available edge - name: $name, hostname: $hostname, scheme: $scheme, port: $port', ({name, hostname, scheme, port}) => {
            const store = useEdgesStore()
            const edge: Edge | undefined = store.getEdge(name)
            expect(edge?.name).toBe(name)
            expect(edge?.hostname).toBe(hostname)
            expect(edge?.scheme).toBe(scheme)
            expect(edge?.port).toBe(port)
        })
        it.each([
            { name: "namex", hostname: "hostname", scheme: "http", port: 80n },
            { name: "", hostname: "hostname", scheme: "https", port: 80n },
            { name: "asdf", hostname: "test", scheme: "https", port: 443n }
        ])('Not available edge - name: $name, hostname: $hostname, scheme: $scheme, port: $port', ({name, hostname, scheme, port}) => {
            const store = useEdgesStore()
            const edge: Edge | undefined = store.getEdge(name)
            expect(edge?.name).not.toBe(name)
            expect(edge?.hostname).not.toBe(hostname)
            expect(edge?.scheme).not.toBe(scheme)
            expect(edge?.port).not.toBe(port)
        })
    })
})