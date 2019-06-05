<template>
  <div>
    <div v-for="size in sizes" v-bind:key="size" class="section">
      <h2>{{size}}</h2>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Default</th>
            <th>Disabled</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(key, color, index) in colors" v-bind:key="color">
            <th>{{color}}</th>
            <td>
              <a :class="`button button--color--${color} button--size--${size}`">Button</a>
            </td>
            <td v-if="index < 2">
              <a :class="`button button--color--${color} button--size--${size}`" disabled>Button</a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
const sizes = ["small", "medium", "large"];
const colors = {
  primary: "island",
  secondary: "cobalt",
  positive: "green",
  orange: "orange",
  white: "white"
};
const varients = ["default", "disabled"];

export default {
  name: "Button",
  mounted() {
    this.$emit("updateFormats", this.formats);
  },
  data() {
    return {
      formats: {
        HTML: function() {},
        Email: function() {}
      },
      colors,
      sizes
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
table {
  thead th {
    text-align: center;
    padding-bottom: $global-spacing;
  }
  tbody th {
    padding-right: $global-spacing;
  }
  .button {
    margin-bottom: 0;
  }
  td {
    padding: 10px 30px;
  }
  th {
    text-align: left;
    font-weight: normal;
    font-family: $monospace-font;
  }
}
.section {
  margin-bottom: $global-spacing-large;
  padding-bottom: $global-spacing-large;
  &:not(:last-child) {
    border-bottom: 1px solid color(zinc);
  }
}
</style>
