<template>
  <div>
    <h2>Hello World</h2>
    <img src="@/assets/diagrams/spacing.svg">
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      spacing: {
        large: 48,
        regular: 24,
        medium: 12,
        small: 6
      }
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.spacing {
  display: grid;
  grid-gap: $global-spacing;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
}
.item {
  background: color(zinc);
  padding: $global-spacing;
  border-radius: $global-radius;
}
</style>
