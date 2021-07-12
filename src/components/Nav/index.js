import React from "react";

function Nav(props) {
	const categories = [
		{
			name: "commercial",
			description:
				"Photos of grocery stores, food trucks, and other commercial projects",
		},
		{ name: "portraits", description: "Portraits of people in my life" },
		{ name: "food", description: "Delicious delicacies" },
		{ name: "gallery", description: "all the pictures" },
		{
			name: "landscape",
			description: "Fields, farmhouses, waterfalls, and the beauty of nature",
		},
	];

	console.log("NAV BAR PROPS!!!", props);
	return (
		<header>
			<h2>
				<a href="/">
					<span role="img" aria-label="camera">
						{" "}
						📸
					</span>{" "}
					Oh Snap!
				</a>
			</h2>
			<nav>
				<ul className="flex-row">
					<li className="mx-2">
						<span
							onClick={(e) => {
								props.setCurrentPage("about");
							}}
						>
							About me
						</span>
					</li>
					<li>
						<span
							onClick={() => {
								props.setCurrentPage("contact");
							}}
						>
							Contact
						</span>
					</li>
					{categories.map((category) => (
						<li className="mx-1" key={category.name}>
							<span
								onClick={() => {
									props.setCurrentPage(category.name);
								}}
							>
								{category.name}
							</span>
						</li>
					))}
				</ul>
			</nav>
		</header>
	);
}

export default Nav;
