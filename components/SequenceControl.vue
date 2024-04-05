<template>
  <div>
    <p>{{ name }}</p>
    <p>{{ path }}</p>
    <InputSwitch v-model="activate" />
    <Dropdown v-model="mode" :options="modes" />
    <Slider v-model="manual" :min="-1" :max="100" />
  </div>
</template>

<script setup lang="ts">
const name = ref("Takeoff")
const active = ref();
const activate = ref();
const path = computed(() => {
     return "/undefined/Processors/" + name.value + "/"
 })

const mqtt = useMqttStore();

 watch(active, (newActive: boolean) => {
     activate.value = newActive
})

watch(activate, (newActivate: boolean, oldActivate: boolean) => {
    if (newActivate != oldActivate) {
        mqtt.publish(path.value + "activate", newActivate ? "1" : "0")
        console.log("Publish");
        
    }
})// 

mqtt.subscribe(path + "active", (message: string) => {
    active.value = message.toString() == "1"
})



const mode = ref("off");
const modes = ref(["Taxi", "Takeoff", "Beacon", "off"]);
const manual = ref(-1);

// watch(value, (newValue, oldValue) => {
//   if (!newValue) {
//     mode.value = "off";
//   } else {
//     mode.value = "Taxi";
//   }
// });
// watch(mode, (newValue, oldValue) => {
//   value.value = newValue != "off";
// });
</script>
