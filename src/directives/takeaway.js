import { escapeHtml } from "../helpers";

function dataValues(el, binding) {
	const { value } = binding;
	console.log(binding)

	const method = value.method || "copy";
	el.setAttribute("data-takeaway", value.value || value);
	el.setAttribute("data-takeaway-method", method);
	el.classList.add(`takeaway--${method}`);
}

function handleCopy(val, vnode) {
	const element = document.createElement("textarea");
	
	element.value = val;
	element.setAttribute("readonly", "");
	element.style = { position: "absolute", left: "-9999px" };
	document.body.appendChild(element);
	element.select();
	document.execCommand("copy");
	document.body.removeChild(element);
	vnode.context.$toasted.show(
		`'${escapeHtml(val)}' has been copied to your clipboard.`
	);
}

function handleDownload(val) {
	const element = document.createElement("a");
	const name = val.split(".")[0].split('/');

	element.setAttribute("href", val);
	element.setAttribute("download", name[name.length-1]);
	element.style.display = "none";
	document.body.appendChild(element);
	element.click();
	document.body.removeChild(element);
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
