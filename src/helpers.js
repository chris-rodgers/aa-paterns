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

export const hexToRgb = function(hex) {
	var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
	return result
		? {
				r: parseInt(result[1], 16),
				g: parseInt(result[2], 16),
				b: parseInt(result[3], 16)
		  }
		: null;
};

export const escapeHtml = function(text) {
	var map = {
		"&": "&amp;",
		"<": "&lt;",
		">": "&gt;",
		'"': "&quot;",
		"'": "&#039;"
	};

	return text.replace(/[&<>"']/g, function(m) {
		return map[m];
	});
}
