import React, { Fragment } from "react";
import { Card } from "../components/Card/Card";
import { useFetchAlbumsQuery } from "../feature/spotify/spotify-api-slice";
import { Spinner } from "../components/Spinner";
interface Props {
	term: string;
}

export const Albums = ({ term }: Props) => {
	const { data, isFetching } = useFetchAlbumsQuery(term);

	const albumCard = data?.albums.items.map((el) => {
		return (
			<Fragment key={el.id}>
				<Card name={el.name} img={el.images[0].url} />
			</Fragment>
		);
	});
	return (
		<>
			{isFetching && <Spinner />}
			{!isFetching && (
				<div style={{ display: "flex", flex: "1 1 auto", flexWrap: "wrap" }}>
					{albumCard}
				</div>
			)}
		</>
	);
};
