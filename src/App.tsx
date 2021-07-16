import React, { useState, useEffect, useRef, useLayoutEffect } from "react";
import { useDebounce } from "use-debounce";
import { Albums } from "./pages/Albums";
import axios from "axios";
import "./general.scss";

function App() {
	const [term, setTerm] = useState("pink floyd");
	const [value] = useDebounce(term, 1000);
	const searchRef = useRef<HTMLInputElement>(null);

	useEffect(() => {
		const getToken = async () => {
			const response = await axios("https://accounts.spotify.com/api/token", {
				headers: {
					"Content-Type": "application/x-www-form-urlencoded",
					Authorization:
						"Basic " +
						btoa(
							"d6fa2687dbe645479484902c59067da1" +
								":" +
								"4ce695d195704c5f90e9de927819b53d"
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
			<Albums term={value} />
		</>
	);
}

export default App;
