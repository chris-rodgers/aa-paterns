import { escapeHtml } from "../helpers";

function dataValues(el, binding) {
	const { value, arg } = binding;
	const method = arg || "copy";
	el.setAttribute("data-takeaway", value);
	el.setAttribute("data-takeaway-method", method);
	el.classList.add(`takeaway--${method}`);
}

function handleCopy(val, vnode) {
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
}

function handleDownload(val) {
    console.log(val)
}

export default {
	update: dataValues,
	bind: (el, binding, vnode) => {
		el.classList.add("takeaway");
		dataValues(el, binding);

		el.addEventListener("click", () => {
			const val = el.getAttribute("data-takeaway");
			const method = el.getAttribute("data-takeaway-method");
			const methods = {
				copy: handleCopy,
				download: handleDownload
			};

			methods[method](val, vnode);
		});
	}
};
