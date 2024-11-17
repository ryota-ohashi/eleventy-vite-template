import "../styles/main.scss";

// import UI Components
import { module } from "./components/module";

const main = () => {

	// UI Component Elements
	const body = document.body;

	// init
	module(body);

};

document.addEventListener("DOMContentLoaded", function () {
	main();
});
