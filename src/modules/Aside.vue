<template>
  <aside class="aside">
    <div class="aside-section" v-for="(item, key, index) in links" v-bind:key="index">
      <div class="aside-section__title">{{key}}</div>
      <ul class="aside-section__links">
        <router-link
          tag="li"
          :to="link.path"
          v-for="(link, index) in item"
          v-bind:key="index"
          class="aside-section__link"
          active-class="aside-section__link aside-section__link--active"
          exact-active-class="aside-section__link aside-section__link--exact-active"
        >{{link.title}}</router-link>
      </ul>
    </div>
  </aside>
</template>

<script>
import { links } from "@/router/index";

console.log(links);

export default {
  name: "Aside",
  data() {
    return { links };
  }
};
</script>

<style lang="scss">
.aside {
  flex-basis: 280px;
  @include breakpoint("tablet") {
    padding: 40px 40px 0 20px;
  }
  &-section {
    padding-bottom: 12px;
    margin-bottom: 40px;
    &__title {
      font-weight: bold;
      text-transform: uppercase;
      padding: 0 30px 12px;
    }
    &__links {
      margin: 0;
      padding: 18px;
      list-style: none;
    }
    &__link {
      display: block;
      padding: 12px;
      color: inherit;
      text-decoration: none;
      cursor: pointer;
      border-radius: $global-radius;
      margin: 5px 0;
      &--active {
        color: white;
        background-color: #005ba9;
      }
      &:not(&--active):hover {
        background-color: $cadet;
      }
    }
    &:not(:last-child) {
      border-bottom: 1px solid $zinc;
    }
  }
}
</style>