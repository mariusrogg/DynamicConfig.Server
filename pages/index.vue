<template>
  <div>
    <p>{{ url }}</p>
    <ClientOnly>
      <p>{{ data }}</p>
    </ClientOnly>
  </div>
</template>

<script setup lang="ts">
import { Container, Edge } from "#imports";

useEdgesStore().edges.set("undefined", new Edge("esp32-0a58d8"));
const edge: Edge | undefined = useEdgesStore()?.getEdgeByName("undefined");
const url = ref(edge?.getUrl());
const data: Ref<Array<Container>> = ref(edge?.fetchContainers());
const value = data.value.at(0);
</script>
