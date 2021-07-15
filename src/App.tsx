import React, { useState, useEffect } from "react";
import { useDebounce } from "use-debounce";
// import { useFetchAlbumsQuery } from "./feature/spotify/spotify-api-slice";
import { Albums } from "./components/Albums";

function App() {
	const [term, setTerm] = useState("pink floyd");
	const [value] = useDebounce(term, 1000);

	return (
		<div>
			<input
				type="text"
				placeholder="enter"
				value={term}
				onChange={(e) => setTerm(e.target.value)}
			/>
			<Albums term={value} />
		</div>
	);
}

export default App;
