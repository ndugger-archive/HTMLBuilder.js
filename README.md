html-builder
============

Usage Example:

	document.body.appendChild(new HTML({
		tagName: "section",
		id: "mySection",
		classList: "foo-bar",
		onclick: function() {
			console.log("hello");
		},
		children: [
			{
				tagName: "a",
				href: "#",
				classList: "button",
				textContent: "Link Here",
			},
			{
				tagName: "p",
				textContent: "Hello World"
			}
		]
	}));

It uses the properties of HTMLElements, with a special case for classList (to make it work without classList.add())
