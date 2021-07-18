import React, { Fragment } from "react";
import { useHistory } from "react-router-dom";
import { Card } from "../components/Card/Card";
import { useFetchAlbumsQuery } from "../feature/spotify/spotify-api-slice";
import { useAppSelector } from "../app/hooks";
import { Spinner } from "../components/Spinner";

export const Albums = () => {
	const term = useAppSelector((state) => state.search.term);
	const { data, isFetching } = useFetchAlbumsQuery(term);
	const history = useHistory();
	const onClick = (id: string) => {
		history.push(`/album/${id}`);
	};
	const albumCard = data?.albums.items.map((el) => {
		return (
			<Fragment key={el.id}>
				<Card
					name={el.name}
					id={el.id}
					onCardClick={onClick}
					img={el.images[0].url}
				/>
			</Fragment>
		);
	});
	return (
		<>
			{isFetching && <Spinner />}
			{!isFetching && (
				<div
					style={{
						display: "flex",
						flexWrap: "wrap",
						justifyContent: "space-around",
					}}
				>
					{albumCard}
				</div>
			)}
		</>
	);
};
