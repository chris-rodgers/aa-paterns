// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";
import Toasted from "vue-toasted";
import takeaway from "@/directives/takeaway";
import { SwitchContainer, SwitchItem } from "@/components/Switch";

Vue.config.productionTip = false;

// Set up toast notifications
Vue.use(Toasted, {
	position: "bottom-left",
	duration: 2000
});

// Add takeaway to clipboard directive
Vue.directive("takeaway", takeaway);

// Switch component
Vue.component('switch-container', SwitchContainer)
Vue.component('switch-item', SwitchItem)

/* eslint-disable no-new */
new Vue({
	el: "#app",
	router,
	components: { App },
	template: "<App/>"
});
