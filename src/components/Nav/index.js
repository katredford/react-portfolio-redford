import React from "react";
// import coverImage from "../../assets/images/hero.png";
function Nav(props) {
	const categories = [
		{ name: "Resume", description: "work experience" },
		{ name: "Portfolio", description: "my web dev work" },
	];

	console.log("NAV BAR PROPS!!!", props);
	return (
		<header>
			<h2>
				<a href="/">
					<span role="img" aria-label="coverimage">
						{" "}
					</span>{" "}
					K. Redford
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
