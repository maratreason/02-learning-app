import React from "react";
import { Switch, Route } from "react-router-dom";
import Dashboard from "./Dashboard/Dashboard";

import Home from "./pages/Home";

function App() {
	return (
		<div className="App">
			<Dashboard />
			<div>
				<Switch>
					<Route path="/" component={Home} />
				</Switch>
			</div>
			
		</div>
	);
}

export default App;
