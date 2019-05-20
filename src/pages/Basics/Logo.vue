<template>
  <div class="logo" v-takeaway="{method: 'download', value: require('../../assets/logo/logo.svg')}">
    <img class="logo__image" src="../../assets/logo/logo.svg">
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

<style lang="scss">
.logo {
  display: inline-block;
  padding: $global-spacing-large $global-spacing-large $global-spacing-large 0;
  &__image{
    width: 300px;
  }
}
</style>
