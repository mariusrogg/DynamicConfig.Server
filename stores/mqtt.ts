import mqtt from "mqtt";

export const useMqttStore = defineStore("mqtt", () => {
    const client = mqtt.connect("mqtt://raspberrypi:9001");
    function subscribe(topic: string, callback: (message: string) => void): void {
        client.subscribe(topic);
        client.on("message", (messageTopic, message) => {
            if (topic == messageTopic) {
                callback(message.toString());
            }
        })
    }
    function publish(topic: string, value: string): void {
            client.publish(topic, value);
        }
  // state: () => ({
  //   mqttClient: mqtt.connect("mqtt://raspberrypi:9001")
  // }),
  // actions: {
  //   publish(topic: string, value: string): void {
  //     // this.mqttClient.publish(topic, value);
  //   },
  //   // subscribe(topic: string, callback: (message: string) => void): void {
  //   //   this.mqttClient.subscribe(topic);
  //   //   this.mqttClient.on("message", (messageTopic, message) => {
  //   //     if (topic == messageTopic) {
  //   //       callback(message.toString());
  //   //     }
  //   //   });
  //   // },
  // },
  return {subscribe, publish}
});
