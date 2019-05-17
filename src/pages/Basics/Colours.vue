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
  "Light Blue": "#6dcff6", // Sky, 
  "Baby Blue": "#2990e6", //Azure
  Blue: "#005baa", // Sea, Sapphire
  Red: "#be1e2d", // Volcano, Lava,
  Black: "#000000",
  White: "#ffffff",
  "Dark Gray": "#495662", // Ash, Charcoal 
  Orange: "#f79c34", // Tiger
  Green: "#7dc855", // Forest
  Yellow: "#ffff00", // Sun
  "Brown Red": "#af554c", // Mud
  "Gray One": "#eeeeee",
  "Gray Two": "#e1e8ee",
  "Gray Three": "#dddddd",
  "Gray Four": "#bdc6cf"
};
const sections = {
  Logo: ["Light Blue", "Blue", "Red"],
  Type: ["Black", "Dark Gray", "Blue", "Baby Blue"],
  Buttons: ["Orange", "Blue", "White"],
  Special: ["Brown Red", "Yellow", "Green"],
  "UI Elements": [
    "Black",
    "Baby Blue",
    "Blue",
    "White",
    "Gray One",
    "Gray Two",
    "Gray Three",
    "Gray Four",
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
        RGBA: function(value){
          const x = hexToRgb(colors[value]);
          return `rgba(${x.r},${x.g},${x.b},1)`
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
