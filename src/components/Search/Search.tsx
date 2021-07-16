import React from "react";

import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { setTerm } from "../../feature/counter/search-term-slice";

export const Search = () => {
	return (
		<div>
			<input type="text" />
		</div>
	);
};
