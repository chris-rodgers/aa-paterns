<template>
  <div id="app">
    <header class="header">
      <div class="wrapper">
        <div class="header__inner">
          <img class="header__logo" src="./assets/logo/logo.svg">
          <button class="header__button" v-on:click="open = !open">
            <burger class="header__burger"/>
          </button>
        </div>
      </div>
    </header>
    <div class="wrapper wrapper--offcanvas" v-bind:class="{'wrapper--active': open}">
      <aside-nav/>
      <main class="main">
        <div class="main__title">
          <h1>{{ $route.name }}</h1>
        </div>
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

        <div class="main__content">
          <transition-group name="fade">
            <div class="sizing" v-if="sizing" key="sizing">
              <h2>Sizing</h2>
              <img class="sizing__image" :src="sizing">
            </div>
            <router-view @updateFormats="updateFormats" :selectedFormat="selected" key="router"/>
          </transition-group>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import AsideNav from "@/modules/Aside";
import Burger from "./assets/icons/og-burger.svg?inline";

export default {
  name: "App",
  methods: {
    updateFormats(value) {
      this.formats = value;
      this.selected = Object.keys(value)[0];
    },
    handleFormatChange(x) {
      this.selected = x;
      console.log(x);
    }
  },
  beforeUpdate(x) {
    try {
      this.sizing = require(`./assets/banners/${this.$route.name}.svg`);
    } catch (e) {
      this.sizing = null;
    }
console.log(x)  },
  data() {
    return { open: false, formats: {}, selected: null, sizing: null };
  },
  components: {
    AsideNav,
    Burger
  }
};
</script>

<style lang="scss">
.header {
  border-bottom: 1px solid color(zinc);
  margin-bottom: $global-spacing-large;
  &__inner {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  &__logo {
    height: 40px;
    margin: $global-spacing-medium $global-spacing;
    @include breakpoint("tablet") {
      height: 50px;
      margin: $global-spacing-medium ($global-spacing + $global-spacing-medium);
    }
  }
  &__button {
    line-height: 0;
  }
  &__burger {
    width: $global-spacing;
    height: $global-spacing;
    margin: $global-spacing-medium $global-spacing;
    line {
      stroke: color(cobalt);
    }
    @include breakpoint("mobile") {
      display: none;
    }
  }
}
.wrapper {
  width: 100%;
  display: flex;
  margin: 0 auto;
  max-width: 1300px;
  &--offcanvas {
    transition: transform 0.5s ease;
    @include breakpoint("mobile", "down") {
      width: calc(100vw + 200px);
      transform: translateX(-200px);
    }
  }
  &--active {
    transform: translateX(0);
  }
}
.main {
  flex: 1;
  padding: 0 $global-spacing;
  min-width: 100vw;
  @include breakpoint("mobile") {
    min-width: auto;
  }
  @include breakpoint("tablet") {
    padding: 0 $global-spacing 0 $global-spacing-large;
  }
  &__title {
    margin-bottom: $global-spacing-medium;
    overflow: hidden;
  }
  &__content {
    position: relative;
  }
}

.sizing {
  border-bottom: 1px solid color(zinc);
  padding-bottom: $global-spacing;
  margin-bottom: $global-spacing;
  &__image {
    max-width: 500px;
  }
}
</style>
