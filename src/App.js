import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import pageRoutes from "./routes/pagesRouter";

function App() {
	return (
		<Router>
			<div className="App">
				<Routes>
					{pageRoutes.map(({ path, element }) => (
						<Route key={path} path={path} element={element} />
					))}
				</Routes>
			</div>
		</Router>
	);
}

export default App;
