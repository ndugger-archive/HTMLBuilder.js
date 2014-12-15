(function(HTMLBuilder) {
	if (window.HTMLBuilder) console.error("Conflict: 'window.HTMLBuilder' already exists.");
	else window.HTMLBuilder = HTMLBuilder;
})(function(childNodes, parentNode) {
	if (typeof childNodes === "object") {
		if (!parentNode) parentNode = document.createDocumentFragment();
		if (!Array.isArray(childNodes)) childNodes = [childNodes];
		for (var i = 0, count = childNodes.length; i < count; i++) {
			if (childNodes[i].tagName || childNodes[i].nodeName) {
				var child = document.createElement(childNodes[i].tagName || childNodes[i].nodeName);
				delete childNodes[i].tagName || childNodes[i].nodeName;
				for (var prop in childNodes[i]) {
					if (prop === "classList") child.classList.add(childNodes[i][prop]);
					else if (child.hasOwnProperty(prop) && prop !== "childNodes") child[prop] = childNodes[i][prop];
				};
				parentNode.appendChild(child);
			} else {
				parentNode.appendChild(document.createTextNode(childNodes[i].textContent));
				var child = parentNode;
			};
			if (childNodes[i].childNodes) HTMLBuilder(childNodes[i].childNodes, child);
		};
		return parentNode;
	} else {
		console.error(new TypeError((typeof childNodes) + " is an invalid argument for childNodes."));
	};
});
