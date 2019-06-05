<template>
  <div>
    <div
      v-if="selectedFormat in formats"
      v-for="(use, key) in sections"
      v-bind:key="key"
      class="colors"
    >
      <h2 class="colors__heading">{{key}}</h2>
      <div
        v-for="(color, key) in use"
        v-bind:key="key"
        :style="{ backgroundColor: formats['HEX'](color), color: lightOrDark(formats['HEX'](color)) === 'dark' ? 'white' : 'black' }"
        v-takeaway="formats[selectedFormat](color)"
        class="colors__item"
      >
        <div class="colors__name">{{color | capitalize}}</div>
        <div class="colors__code">{{formats[selectedFormat](color)}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { lightOrDark, hexToRgb } from "@/helpers";
import kebabCase from "lodash/kebabCase";
import { colors } from "@/styles/theme.json";

const sections = {
  Logo: ["cloud", "cobalt", "red"],
  Type: ["type", "cobalt", "island"],
  Buttons: ["orange", "cobalt", "white"],
  Special: ["maroon", "yellow", "green"],
  "UI Elements": [
    "island",
    "cobalt",
    "white",
    "zinc",
    "cadet",
    "alloy",
    "pigeon",
    "orange",
    "green"
  ]
};

export default {
  name: "Colors",
  props: ["selectedFormat", "theme"],
  filters: {
    capitalize: function(value) {
      if (!value) return "";
      value = value.toString();
      return value.charAt(0).toUpperCase() + value.slice(1);
    }
  },
  mounted() {
    this.$emit("updateFormats", this.formats);
  },
  data() {
    return {
      sections,
      lightOrDark,
      selected: null,
      formats: {
        HEX: function(value) {
          return colors[value];
        },
        SCSS: function(value) {
          return `color(${kebabCase(value)})`;
        },
        CSS: function(value) {
          return `var(--color-${kebabCase(value)})`;
        },
        RGBA: function(value) {
          const x = hexToRgb(colors[value]);
          return `rgba(${x.r},${x.g},${x.b},1)`;
        }
      }
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.colors {
  display: grid;
  grid-gap: $global-spacing;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  margin-bottom: $global-spacing;

  &__heading {
    margin: 0;
    grid-column: 1 / -1;
  }
  &__item {
    padding: $global-spacing-large $global-spacing;
    border-radius: $global-radius;
    margin-bottom: $global-spacing;
  }
  &__code {
    font-family: $monospace-font, "Courier New", Courier, monospace;
  }
  &__name {
    margin-bottom: $global-spacing-small;
    font-weight: bold;
  }
}
</style>
