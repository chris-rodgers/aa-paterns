<template>
  <div>
    <img v-takeaway="{method: 'download', value: require('../../assets/logo/logo.svg')}" src="../../assets/logo/logo.svg">
  </div>
</template>

<script>
export default {
  name: "Logo",
  mounted() {
    this.$emit("updateFormats", this.formats);
  },
  data() {
    return {
      formats: {
        SVG: null,
        PNG: null
      }
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
