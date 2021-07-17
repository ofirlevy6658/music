import React from "react";
import { useFetchTracksQuery } from "../feature/spotify/spotify-api-slice";
import { useParams } from "react-router-dom";
import { SoundPlayer } from "./../components/SoundPlayer/SoundPlayer";
interface Params {
	id: string;
}
export const Album = () => {
	let { id } = useParams<Params>();
	const { data, isFetching } = useFetchTracksQuery(id);
	console.log(data);

	return (
		<>
			<SoundPlayer />
		</>
	);
};
