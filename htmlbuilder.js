(function(builder) {
	if (window.HTML) console.error("Conflict: 'window.HTML' already exists.")
	else builder();
})(function(builder) {
	function HTML(childNodes, parentNode) {
		if (typeof childNodes === "object") {
			if (!parentNode) parentNode = document.createDocumentFragment();
			if (!Array.isArray(childNodes)) childNodes = [childNodes];
			for (var i = 0, count = childNodes.length; i < count; i++) {
				if (childNodes[i].tagName) {
					var child = document.createElement(childNodes[i].tagName);
					delete childNodes[i].tagName;
					for (var prop in childNodes[i]) {
						if (prop === "classList") {
							child.classList.add(childNodes[i][prop]);
						} else if (child.hasOwnProperty(prop) && prop !== "childNodes") {
							child[prop] = childNodes[i][prop];
						};
					};
				} else {
					child = document.createTextNode(childNodes[i].textContent);
				};
				parentNode.appendChild(child);
				if (childNodes[i].childNodes) new HTML(childNodes[i].childNodes, child);
			};
			return parentNode;
		} else {
			console.error(new TypeError((typeof childNodes) + " is an invalid argument for childNodes."));
		};
	};
	window.HTML = HTML;
});
