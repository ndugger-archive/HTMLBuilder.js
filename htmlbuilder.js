(function(HTMLBuilder) {
	if (window.HTMLBuilder) {
		console.error(new Error("Conflict: 'window.HTMLBuilder' already exists."));
	} else { 
		window.HTMLBuilder = HTMLBuilder;
	};
})(function(childNodes, parentNode) {
	if (typeof childNodes === "object") {
		if (!parentNode) {
			parentNode = document.createDocumentFragment();
		};
		if (!Array.isArray(childNodes)) {
			childNodes = [childNodes];
		};
		for (var i = 0, count = childNodes.length; i < count; i++) {
			if (childNodes[i].tagName || childNodes[i].nodeName) {
				var child = document.createElement(childNodes[i].tagName || childNodes[i].nodeName);
				delete childNodes[i].tagName && delete childNodes[i].nodeName;
				for (var prop in childNodes[i]) {
					switch (prop) {
						case "classList":
							child.classList.add(childNodes[i][prop]);
							break;
						case "childNodes":
						case "children":
							break;
						default:
							if (child.hasOwnProperty(prop)) child[prop] = childNodes[i][prop];
							break;
					};
				};
				parentNode.appendChild(child);
			} else {
				parentNode.appendChild(document.createTextNode(childNodes[i].textContent));
				var child = parentNode;
			};
			if (childNodes[i].childNodes || childNodes[i].children) {
				HTMLBuilder(childNodes[i].childNodes || childNodes[i].children, child);
			};
		};
		return parentNode;
	} else {
		console.error(new TypeError((typeof childNodes) + " is an invalid argument."));
	};
});
