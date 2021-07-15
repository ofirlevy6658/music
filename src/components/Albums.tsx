import React from "react";
import { Card } from "./Card/Card";
import { useFetchAlbumsQuery } from "../feature/spotify/spotify-api-slice";

interface Props {
	term: string;
}

export const Albums = ({ term }: Props) => {
	const { data, isFetching } = useFetchAlbumsQuery(term);

	const albumCard = data?.albums.items.map((el) => {
		return <Card id={el.id} name={el.name} img={el.images[0].url} />;
	});
	return (
		<>
			{!isFetching && (
				<div style={{ display: "flex", flex: "1 1 auto", flexWrap: "wrap" }}>
					{albumCard}
				</div>
			)}
		</>
	);
};
