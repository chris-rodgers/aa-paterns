<template>
  <div>
    <!-- <h2>Spacing</h2> -->
    <div class="text-right">
      <switch-container>
        <switch-item
          :onChange="handleFormatChange"
          name="format"
          :value="format"
          v-for="format in formats"
          v-bind:key="format"
          :checked="format === selected"
        >{{format}}</switch-item>
      </switch-container>
    </div>
    <div class="icons">
      <div v-takeaway:download="item.php" class="icons__item" v-for="(item, key) in icons" v-bind:key="key">
        <img class="icons__icon" :src="item.src">
        <span class="icons__name">{{item.name}}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { SwitchContainer, SwitchItem } from "@/components/Switch";

const req = require.context("../../assets/icons", true, /.svg$/);

const icons = req.keys().reduce((a, b) => {
  const name = b.replace("./", "").replace(".svg", "");
  return [
    ...a,
    {
      name,
      php: `<?php aaIcon('${name}'); ?>`,
      src: req(b)
    }
  ];
}, []);

export default {
  name: "Icons",
  methods: {
    handleFormatChange(x) {
      console.log(x)
    }
  },
  data() {
    return {
      icons,
      selected: 'PHP',
      formats: [
        'PHP',
        'SVG'
      ]
    };
  },
  components: {
    SwitchContainer,
    SwitchItem
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
    border-bottom: 1px solid $gray-one;
    font-family: $monospace-font;
  }
  &__icon {
    width: $global-spacing-large;
    height: $global-spacing-large;
    margin-bottom: $global-spacing;
  }
}
</style>
