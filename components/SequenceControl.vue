<template>
    <p>{{ name }}</p>
    <InputSwitch v-model="value"/>
    <Dropdown v-model="mode" :options="modes"/>
    <Slider v-model="manual" :min="-1" :max="100"/>
</template>

<script setup lang="ts">
import type { MenuItem } from 'primevue/menuitem';

    const name = ref("Controller")
    const value = ref(false)
    const mode = ref("off")
    const modes = ref(["Taxi", "Takeoff", "Beacon", "off"])
    const manual = ref(-1)

    watch(value, (newValue, oldValue) => {
        if (!newValue) {
            mode.value = "off"
        }
        else {
            mode.value = "Taxi"
        }
    })
    watch(mode, (newValue, oldValue) => {
        value.value = newValue != "off"
    })
</script>