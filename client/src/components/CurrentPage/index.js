import React from "react";
import Resume from "../Resume";
import Contact from "../Contact";
import About from "../About";

import Portfolio from "../Portfolio";
function CurrentPage(props) {
	var whoToDisplay;

	if (props.currentPageState === "portfolio") {
		whoToDisplay = <Portfolio />;
	} else if (props.currentPageState === "about") {
		whoToDisplay = <About />;
	} else if (props.currentPageState === "contact") {
		whoToDisplay = <Contact />;
	} else if (props.currentPageState === "resume") {
		whoToDisplay = <Resume />;
	}

	return <section>{whoToDisplay}</section>;
}

export default CurrentPage;
