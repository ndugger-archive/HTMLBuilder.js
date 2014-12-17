HTMLBuilder.js
==============
(Released under MIT License) **Usage Example:**

	var foo = HTMLBuilder({
		tagName: "section",
		id: "mySection",
		classList: "foo-bar",
		onclick: function() {
			console.log("clicked");
		},
		childNodes: [
			{
				tagName: "a",
				href: "#",
				classList: "button",
				textContent: "Link Here",
			},
			{
				tagName: "p",
				textContent: "Hello World.",
				childNodes: {
					textContent: " I'm a textNode!"
				}
			}
		]
	});
	document.body.appendChild(foo);

It uses the properties of HTMLElements, with a special case for **classList** (to make it work without classList.add()). 

Both **tagName** and **nodeName** are supported for creating the tag.
