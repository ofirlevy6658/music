import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { setTerm } from "../../feature/counter/search-term-slice";
import "./search.scss";

export const Search = () => {
	const dispatch = useAppDispatch();
	const [query, setQuery] = useState("");
	const history = useHistory();
	useEffect(() => {
		const timeout = setTimeout(() => {
			if (query) {
				dispatch(setTerm(query));
				if (history.location.pathname !== "/") history.push("/");
			}
		}, 1500);
		return () => {
			clearTimeout(timeout);
		};
	}, [query, dispatch]);

	return (
		<div className="input-container">
			<input
				className="search"
				type="text"
				placeholder={query}
				value={query}
				onChange={(e) => setQuery(e.target.value)}
			/>
		</div>
	);
};
