import React from "react";
import imageOne from "../../assets/images/kittyTranslate.png";
import imageTwo from "../../assets/images/roastMe.png";
function Portfolio() {
	return (
		<section>
			<h1>Portfolio</h1>
			<p>its my work!</p>
			<img
				src={imageOne}
				className="my-2"
				style={{ width: "25%" }}
				alt="kitty translate link"
				// https://likica.github.io/kitty_translator/
			/>
			<br></br>
			<img
				src={imageTwo}
				className="my-2"
				style={{ width: "25%" }}
				alt="Roast Me link"
				// https://gentle-wildwood-31451.herokuapp.com/
			/>
		</section>
	);
}

export default Portfolio;
