export const lightOrDark = function(color) {
	// Variables for red, green, blue values
	var r, g, b, hsp;

	// Check the format of the color, HEX or RGB?
	if (color.match(/^rgb/)) {
		// If HEX --> store the red, green, blue values in separate variables
		color = color.match(
			/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)$/
		);

		r = color[1];
		g = color[2];
		b = color[3];
	} else {
		// If RGB --> Convert it to HEX: http://gist.github.com/983661
		color = +(
			"0x" + color.slice(1).replace(color.length < 5 && /./g, "$&$&")
		);

		r = color >> 16;
		g = (color >> 8) & 255;
		b = color & 255;
	}

	// HSP (Highly Sensitive Poo) equation from http://alienryderflex.com/hsp.html
	hsp = Math.sqrt(0.299 * (r * r) + 0.587 * (g * g) + 0.114 * (b * b));

	// Using the HSP value, determine whether the color is light or dark
	if (hsp > 127.5) {
		return "light";
	} else {
		return "dark";
	}
};

export const copyString = function(str) {
	// Create new element
	var el = document.createElement("textarea");
	// Set value (string to be copied)
	el.value = str;
	// Set non-editable to avoid focus and move outside of view
	el.setAttribute("readonly", "");
	el.style = { position: "absolute", left: "-9999px" };
	document.body.appendChild(el);
	// Select text inside element
	el.select();
	// Copy text to clipboard
	document.execCommand("copy");
	// Remove temporary element
	document.body.removeChild(el);
}
