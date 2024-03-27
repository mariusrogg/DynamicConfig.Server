import { Edge } from "#imports";
import { describe, expect, it, beforeEach, vi } from "vitest";

it.each([
  { name: "name", hostname: "hostname", scheme: "https", port: 443n },
  { name: "", hostname: "hostname", scheme: "https", port: 443n },
  { name: "name", hostname: "", scheme: "https", port: 443n },
  { name: "name", hostname: "hostname", scheme: undefined, port: 443n },
  { name: "name", hostname: "hostname", scheme: "https", port: undefined },
])(
  "getUrl(name: $name, hostname: $hostname, scheme: $scheme, port: $port)",
  ({ name, hostname, scheme, port }) => {
    const edge: Edge = new Edge(name, hostname, scheme, port);
    if (hostname) {
      expect(edge.getUrl()).toBe(
        `${scheme ? scheme : "http"}://hostname:${port ? port : 80n}`,
      );
    } else {
      expect(edge.getUrl()).toBe(undefined);
    }
  },
);
it.each([
  { name: "name", hostname: "hostname", scheme: "https", port: 443n },
  { name: "", hostname: "hostname", scheme: "https", port: 443n },
  { name: "name", hostname: "", scheme: "https", port: 443n },
  { name: "name", hostname: "hostname", scheme: undefined, port: 443n },
  { name: "name", hostname: "hostname", scheme: "https", port: undefined },
])(
  "constructor(name: $name, hostname: $hostname, scheme: $scheme, port: $port)",
  ({ name, hostname, scheme, port }) => {
    const edge: Edge = new Edge(name, hostname, scheme, port);
    expect(edge.name).toBe(name);
    expect(edge.hostname).toBe(hostname);
    expect(edge.scheme).toBe(scheme ? scheme : "http");
    expect(edge.port).toBe(port ? port : 80n);
  },
);
