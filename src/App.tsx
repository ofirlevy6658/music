import React, { useEffect, useState } from "react";
import axios from "axios";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Albums } from "./pages/Albums";
import { Album } from "./pages/Album";
import { Tracks } from "./pages/Tracks";
import { Search } from "./components/Search/Search";

import "semantic-ui-css/semantic.min.css";
import "./reset.scss";
import "./app.scss";

function App() {
	const [token, setToken] = useState("");
	useEffect(() => {
		const getToken = async () => {
			const response = await axios("https://accounts.spotify.com/api/token", {
				headers: {
					"Content-Type": "application/x-www-form-urlencoded",
					Authorization:
						"Basic " +
						btoa(
							`${process.env.REACT_APP_CLIENT_ID}:${process.env.REACT_APP_CLIENT_SECRET}`
						),
				},
				data: "grant_type=client_credentials",
				method: "POST",
			});
			setToken(response.data.access_token);
			localStorage.setItem("token", response.data.access_token);
		};
		getToken();
	}, []);

	return (
		<>
			<Router>
				<Search />
				<Switch>
					<Route path="/album/:id">{<Album />}</Route>
					<Route path="/tracks">
						<Tracks />
					</Route>
					<Route path="/">{token && <Albums />}</Route>
				</Switch>
			</Router>
		</>
	);
}

export default App;
