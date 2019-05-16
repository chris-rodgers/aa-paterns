// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";
import Toasted from "vue-toasted";

Vue.config.productionTip = false;

// Set up toast notifications
Vue.use(Toasted, {
	position: "bottom-left",
	duration: 2000
});

// Add copy to clipboard directive
Vue.directive("copy", {
	bind: (el, binding, vnode) => {
		el.addEventListener("click", () => {
			const { value } = binding;
			console.log(value);
			// Create new element
			var textarea = document.createElement("textarea");
			// Set value (string to be copied)
			textarea.value = value;
			// Set non-editable to avoid focus and move outside of view
			textarea.setAttribute("readonly", "");
			textarea.style = { position: "absolute", left: "-9999px" };
			document.body.appendChild(textarea);
			// Select text inside element
			textarea.select();
			// Copy text to clipboard
			document.execCommand("copy");
			// Remove temporary element
			document.body.removeChild(textarea);
			console.log(vnode);
			vnode.context.$toasted.show(`'${value}' has been copied to your clipboard.`);
		});
	}
});

/* eslint-disable no-new */
new Vue({
	el: "#app",
	router,
	components: { App },
	template: "<App/>"
});
