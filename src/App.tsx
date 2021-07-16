import React, { useState, useEffect, useRef, useLayoutEffect } from "react";
import { useDebounce } from "use-debounce";
import { Albums } from "./pages/Albums";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "./app/hooks";
// import {  } from "./feature/counter/search-term-slice";

import axios from "axios";
import "./general.scss";

function App() {
	const [term, setTerm] = useState("pink floyd");
	const [value] = useDebounce(term, 1000);
	const searchRef = useRef<HTMLInputElement>(null);
	const term2 = useAppSelector((state) => state.search.term);
	const dispatch = useAppDispatch();
	console.log(term2);
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
			localStorage.setItem("token", response.data.access_token);
		};
		getToken();
	}, []);

	useLayoutEffect(() => {
		searchRef.current?.focus();
	});
	return (
		<>
			<div className="input-container">
				<input
					className="search"
					type="text"
					placeholder="enter"
					ref={searchRef}
					value={term}
					onChange={(e) => setTerm(e.target.value)}
				/>
			</div>
			<Router>
				<Switch>
					<Route path="/album/:id">
						<h1>hi</h1>
					</Route>
					<Route path="/">
						<Albums term={value} />
					</Route>
				</Switch>
			</Router>
		</>
	);
}

export default App;
