<template>
  <div>
    <div v-for="(use, key) in colors" v-bind:key="key" class="colors">
      <h2 class="colors__heading">{{key}}</h2>
      <div
        v-for="(color, key) in use"
        v-bind:key="key"
        :style="{ backgroundColor: color, color: lightOrDark(color) === 'dark' ? 'white' : 'black' }"
        class="colors__item"
      >
        <div class="colors__name">{{key}}</div>

        <div class="colors__code">{{color}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { lightOrDark } from "@/helpers";

const colors = {
  "Light Blue": "#6dcff6", // Sky,
  "Baby Blue": "#2990e6",
  Blue: "#005baa", // Sea blue
  Red: "#be1e2d", // Coral, Lava,
  Black: "#000000",
  White: "#ffffff",
  "Dark Gray": "#495662", // Ash,
  Orange: "#f79c34",
  Green: "#7dc855",
  Yellow: "#ffff00",
  "Brown Red": "#af554c",
  "Gray One": "#eeeeee",
  "Gray Two": "#e1e8ee",
  "Gray Three": "#dddddd",
  "Gray Four": "#bdc6cf"
};
const getColor = function(name) {
  return { [name]: colors[name] };
};
export default {
  name: "Colors",
  data() {
    return {
      colors: {
        Logo: {
          ...getColor("Light Blue"),
          ...getColor("Blue"),
          ...getColor("Red")
        },
        Type: {
          ...getColor("Black"),
          ...getColor("Dark Gray"),
          ...getColor("Blue"),
          ...getColor("Baby Blue")
        },
        Buttons: {
          ...getColor("Orange"),
          ...getColor("Blue"),
          ...getColor("White")
        },
        Special: {
          ...getColor("Brown Red"),
          ...getColor("Yellow"),
          ...getColor("Green")
        },
        "UI Elements": {
          ...getColor("Black"),
          ...getColor("Baby Blue"),
          ...getColor("Blue"),
          ...getColor("White"),
          ...getColor("Gray One"),
          ...getColor("Gray Two"),
          ...getColor("Gray Three"),
          ...getColor("Gray Four"),
          ...getColor("Orange"),
          ...getColor("Green")
        }
      },
      lightOrDark
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.colors {
  display: grid;
  grid-gap: 16px;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));

  margin-bottom: 24px;

  &__heading {
    margin: 0;
    grid-column: 1 / -1;
  }
  &__item {
    padding: 48px 22px;
    border-radius: $global-radius;
  }
  &__code {
    font-family: "SFMono-Regular", Menlo, Monaco, Consolas, "Liberation Mono",
      "Courier New", Courier, monospace;
  }
  &__name {
    margin-bottom: 6px;
    font-weight: bold;
  }
}
</style>
