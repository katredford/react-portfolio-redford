import React from "react";
import imageOne from "../../assets/images/kittyTranslate.png";
import imageTwo from "../../assets/images/roastMe.png";
function Portfolio() {
	return (
		<section>
			<h1>Portfolio</h1>
			<p>its my work!</p>
			<a href="https://likica.github.io/kitty_translator/">
				{" "}
				Kitty Translator{" "}
			</a>
			<br></br>
			<img
				src={imageOne}
				className="my-2"
				style={{ width: "25%" }}
				alt="kitty translate link"
			/>
			<br></br>
			<a href="https://gentle-wildwood-31451.herokuapp.com/"> Roast Me </a>
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
