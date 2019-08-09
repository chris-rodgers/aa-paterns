<template>
  <div class="example-typography" v-if="selectedFormat in formats">
    <h1>H1 ({{formats[selectedFormat](2.5)}})</h1>
    <h2>H2 ({{formats[selectedFormat](2)}})</h2>
    <h3>H3 ({{formats[selectedFormat](1.375)}})</h3>
    <h4>H4 ({{formats[selectedFormat](1.125)}})</h4>
    <h5>H5 ({{formats[selectedFormat](1)}})</h5>
    <h6>H6 ({{formats[selectedFormat](0.875)}})</h6>
    <p>p ({{formats[selectedFormat](1)}})</p>
  </div>
</template>

<script>
export default {
  name: "Type",
  props: ["selectedFormat"],
  mounted() {
    this.$emit("updateFormats", this.formats);
  },
  data() {
    return {
      formats: {
        px: function(size) {
          return `${size*16}px`;
        },
        rem: function(size) {
          return `${size}rem`;
        }
      },
      tags: {
        h1: 2.5,
        h2: 2,
        h3: 1.375,
        h4: 1.125,
        h5: 1,
        h6: 0.875,
        p: 1
      }
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.example-typography {
  font-size: 16px;
  h1 {
    font-size: 2.5rem;
  }

  h2 {
    font-size: 2rem;
  }

  h3 {
    font-size: 1.375rem;
  }

  h4 {
    font-size: 1.125rem;
  }

  h5 {
    font-size: 1rem;
  }

  h6 {
    font-size: 0.875rem;
  }

  p {
    font-size: 1rem;
    line-height: 1.5rem;
  }
}
</style>
