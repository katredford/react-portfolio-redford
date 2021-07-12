import React from "react";

import Gallery from "../Gallery";
import About from "../About";
import Food from "../Food";
function CurrentPage(props) {
	var whoToDisplay;

	if (props.currentPageState === "food") {
		whoToDisplay = <Food />;
	} else if (props.currentPageState === "about") {
		whoToDisplay = <About />;
	} else if (props.currentPageState === "landscape") {
		whoToDisplay = <div>Landscape file coming soon!!</div>;
	} else if (props.currentPageState === "gallery") {
		whoToDisplay = <Gallery />;
	}

	return <section>{whoToDisplay}</section>;
}

export default CurrentPage;
