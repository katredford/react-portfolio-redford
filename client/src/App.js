import React, { useState } from "react";

// import Gallery from "./components/Gallery";
import CurrentPage from "./components/CurrentPage";
import Nav from "./components/Nav";
import "./App.css";

function App() {
	const [currentPageState, setCurrentPage] = useState("about");

	console.log("Current page state!!!", currentPageState);

	// setTimeout(() => {
	// 	setCurrentPage("Home!!!");
	// }, 3000);

	return (
		<div>
			<Nav setCurrentPage={setCurrentPage}></Nav>
			<main>
				<CurrentPage currentPageState={currentPageState} />
			</main>
		</div>
	);
}

export default App;
