<template>
  <div>
    <h2>Hello World</h2>
    <img v-for="(item, key) in icons" v-bind:key="key" :src="item">
  </div>
</template>

<script>
const req = require.context("../../assets/icons", true, /.svg$/);

const icons = req.keys().reduce((a, b) => {
  return [...a, req(b)];
}, []);

console.log(icons[0])

export default {
  name: "Icons",
  data() {
    return {
      icons
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
