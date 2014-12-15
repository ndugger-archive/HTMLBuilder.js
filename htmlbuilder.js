(function(builder) {
	if (window.HTML) {
		console.error("Conflict: 'window.HTML' already exists.")
	} else {
		builder();
	};
})(function(builder) {
	function HTML(children, parent) {
		if (typeof children === "object") {
			if (!parent) {
				parent = document.createDocumentFragment();
			};
			if (!Array.isArray(children)) {
				children = [children];
			};
			for (var i = 0, count = children.length; i < count; i++) {
				if (children[i].tagName) {
					var child = document.createElement(children[i].tagName);
					delete children[i].tagName;
					for (var prop in children[i]) {
						if (prop === "classList") {
							child.classList.add(children[i][prop]);
						} else if (child.hasOwnProperty(prop) && prop !== "children") {
							child[prop] = children[i][prop];
						};
					};
					parent.appendChild(child);
				} else {
					child = parent;
				};
				if (children[i].children) {
					new HTML(children[i].children, child);
				};
			};
			return parent;
		} else {
			var error = new TypeError((typeof children) + " is an invalid argument for children.");
			console.error(error);
		};
	};
	window.HTML = HTML;
});
