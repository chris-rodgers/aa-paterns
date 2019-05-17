<template>
  <div>
    <!-- <h2>Spacing</h2> -->
    <div class="icons">
      <div v-copy="item.php" class="icons__item" v-for="(item, key) in icons" v-bind:key="key">
        <img class="icons__icon" :src="item.src">
        <span class="icons__name">{{item.name}}</span>
      </div>
    </div>
  </div>
</template>

<script>
const req = require.context("../../assets/icons", true, /.svg$/);

const icons = req.keys().reduce((a, b) => {
  const name = b.replace('./', '').replace('.svg', '');
  return [...a, {
    name,
    php: `<?php aaIcon('${name}'); ?>`,
    src: req(b)
  }];
}, []);

console.log(icons[0]);

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
<style scoped lang="scss">
.icons {
  display: grid;
  grid-gap: $global-spacing;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  &__item{
    display: flex;
    align-items: center;
    padding: $global-spacing $global-spacing $global-spacing-large;
    flex-direction: column;
    text-align: center;
    border-bottom: 1px solid $gray-one;
    font-family: $monospace-font;
  }
  &__icon{
    width: $global-spacing-large;
    height: $global-spacing-large;
    margin-bottom: $global-spacing;
  }
}
</style>
