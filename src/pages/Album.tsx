import React, { useEffect, useState } from "react";
import { useFetchTracksQuery } from "../feature/spotify/spotify-api-slice";
import { useParams } from "react-router-dom";
import { SoundPlayer } from "./../components/SoundPlayer/SoundPlayer";
interface Params {
	id: string;
}
type Track = {
	name: string;
	url: string | null;
	index: number;
};

export const Album = () => {
	const [tracks, setTracks] = useState<Track[] | undefined>();
	let { id } = useParams<Params>();
	const { data } = useFetchTracksQuery(id);
	useEffect(() => {
		const tracksArr = data?.tracks.items.map((el, i) => ({
			name: el.name,
			url: el.preview_url,
			index: i,
		}));
		setTracks(tracksArr);
	}, [data]);
	return (
		<>
			<SoundPlayer tracks={tracks} />
		</>
	);
};
