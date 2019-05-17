// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";
import Toasted from "vue-toasted";
import { esacapeHtml, escapeHtml } from "./helpers";
import takeaway from "./directives/takeway";

Vue.config.productionTip = false;

// Set up toast notifications
Vue.use(Toasted, {
	position: "bottom-left",
	duration: 2000
});

// Add takeaway to clipboard directive
Vue.directive("takeaway", takeaway);

/* eslint-disable no-new */
new Vue({
	el: "#app",
	router,
	components: { App },
	template: "<App/>"
});
