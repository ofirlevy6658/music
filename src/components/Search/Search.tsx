import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { setTerm } from "../../feature/search-term/search-term-slice";
import { Input } from "semantic-ui-react";
import "./search.scss";

export const Search = () => {
	const [query, setQuery] = useState("");
	const dispatch = useAppDispatch();
	const term = useAppSelector((state) => state.search.term);
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
	}, [query, dispatch, history]);

	return (
		<div className="input-container">
			<Input
				className="search"
				icon="search"
				type="text"
				size="huge"
				placeholder={term}
				value={query}
				onChange={(e) => setQuery(e.target.value)}
			/>
		</div>
	);
};
