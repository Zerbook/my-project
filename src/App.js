import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import React from "react";
import("./App.css");

function App() {
	const currentYear = new Date().getFullYear(); // Императивный стиль

	return (
		//  Декларативный стиль отсюда начинается
		React.createElement(
			React.Fragment,
			null,
			React.createElement(
				"div",
				null,
				React.createElement(
					"a",
					{ href: "https://vite.dev", target: "_blank" },
					React.createElement("img", {
						src: viteLogo,
						className: "logo",
						alt: "Vite logo",
					})
				),
				React.createElement(
					"a",
					{ href: "https://react.dev", target: "_blank" },
					React.createElement("img", {
						src: reactLogo,
						className: "logo react",
						alt: "React logo",
					})
				)
			),
			React.createElement("h1", null, "Vite + React"),
			React.createElement(
				"div",
				{ className: "card" },
				React.createElement(
					"p",
					null,
					"Edit ",
					React.createElement("code", null, "src/App.js"),
					" and save to test HMR"
				)
			),
			React.createElement(
				"footer",
				null,
				React.createElement("p", null, currentYear)
			),
			React.createElement(
				"p",
				{ className: "read-the-docs" },
				"Click on the Vite and React logos to learn more"
			)
		) //  Декларативный стиль здесь заканчивается
	);
}

export default App;
