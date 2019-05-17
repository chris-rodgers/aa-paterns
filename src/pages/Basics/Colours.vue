<template>
  <div>
    <div class="text-right">
      <switch-container>
        <switch-item
          :onChange="handleFormatChange"
          name="format"
          :value="key"
          v-for="(func, key) in formats"
          v-bind:key="key"
          :checked="key === selected"
        >{{key}}</switch-item>
      </switch-container>
    </div>
    <div v-for="(use, key) in sections" v-bind:key="key" class="colors">
      <h2 class="colors__heading">{{key}}</h2>
      <div
        v-for="(color, key) in use"
        v-bind:key="key"
        :style="{ backgroundColor: formats['HEX'](color), color: lightOrDark(formats['HEX'](color)) === 'dark' ? 'white' : 'black' }"
        v-takeaway="formats[selected](color)"
        class="colors__item"
      >
        <div class="colors__name">{{color}}</div>
        <div class="colors__code">{{formats[selected](color)}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { lightOrDark, hexToRgb } from "@/helpers";
import { SwitchContainer, SwitchItem } from "@/components/Switch";
import kebabCase from "lodash/kebabCase";

const colors = {
  Cloud: "#6dcff6", // Sky,
  Island: "#2990e6", //Azure
  Cobalt: "#005baa", // Cobalt
  Red: "#be1e2d", // Volcano, Lava,
  White: "#ffffff",
  Type: "#495662", // Ash, Charcoal
  Orange: "#f79c34", // Tiger
  Green: "#7dc855", // Forest
  Yellow: "#ffff00", // Sun
  Maroon: "#af554c", // Mud
  Zinc: "#eeeeee",
  Cadet: "#e1e8ee",
  Alloy: "#dddddd",
  Pigeon: "#bdc6cf"
};
const sections = {
  Logo: ["Cloud", "Cobalt", "Red"],
  Type: ["Type", "Cobalt", "Island"],
  Buttons: ["Orange", "Cobalt", "White"],
  Special: ["Maroon", "Yellow", "Green"],
  "UI Elements": [
    "Island",
    "Cobalt",
    "White",
    "Zinc",
    "Cadet",
    "Alloy",
    "Pigeon",
    "Orange",
    "Green"
  ]
};

export default {
  name: "Colors",
  components: {
    SwitchContainer,
    SwitchItem
  },
  methods: {
    handleFormatChange(x) {
      this.selected = x;
    }
  },
  data() {
    return {
      sections,
      lightOrDark,
      selected: "HEX",
      formats: {
        HEX: function(value) {
          return colors[value];
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
console.log(this);
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
