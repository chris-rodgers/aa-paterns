export default {
	update: (el, binding, vnode) => {
		el.setAttribute("data-takeaway", binding.value);
	},
	bind: (el, binding, vnode) => {
		el.classList.add("takeaway", "takeaway--copy");
		el.setAttribute("data-takeaway", binding.value);

		el.addEventListener("click", () => {
			const val = el.getAttribute("data-takeaway");

			// Create new element
			var textarea = document.createElement("textarea");
			// Set value (string to be copied)
			textarea.value = val;
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
			vnode.context.$toasted.show(
				`'${escapeHtml(val)}' has been copied to your clipboard.`
			);
		});
	}
};
