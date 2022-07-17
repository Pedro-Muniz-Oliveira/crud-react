import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import App from "./App";
import { toHaveStyle } from "@testing-library/jest-dom/dist/matchers";

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById("root")
);


