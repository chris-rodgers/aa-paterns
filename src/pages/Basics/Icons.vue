<template>
  <div>
    <div class="icons">
      <div
        v-takeaway="{value: item[selectedFormat], method: formats[selectedFormat]}"
        class="icons__item"
        v-for="(item, key) in icons"
        v-bind:key="key"
      >
        <img class="icons__icon" :src="item.Download">
        <span class="icons__name">{{item.name}}</span>
        <!-- <a :href="item.Download" download>download</a> -->
      </div>
    </div>
  </div>
</template>

<script>
const req = require.context("../../assets/icons", true, /.svg$/);

const icons = req.keys().reduce((a, b) => {
  const name = b.replace("./", "").replace(".svg", "");
  return [
    ...a,
    {
      name,
      PHP: `<?php aaIcon('${name}'); ?>`,
      Download: req(b)
    }
  ];
}, []);

export default {
  name: "Icons",
  props: ['selectedFormat'],
  mounted() {
    this.$emit("updateFormats", this.formats);
  },
  data() {
    return {
      icons,
      selected: "PHP",
      formats: {
        PHP: "copy",
        Download: "download"
      }
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.icons {
  display: grid;
  grid-gap: 0 $global-spacing;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  &__item {
    display: flex;
    align-items: center;
    padding: $global-spacing-large $global-spacing;
    $margin-bottm: $global-spacing;
    flex-direction: column;
    text-align: center;
    border-bottom: 1px solid $zinc;
    font-family: $monospace-font;
  }
  &__icon {
    width: $global-spacing-large;
    height: $global-spacing-large;
    margin-bottom: $global-spacing;
  }
}
</style>
