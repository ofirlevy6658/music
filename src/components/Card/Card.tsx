import React from "react";
import "./card.scss";

interface Props {
	name: string;
	img: string;
	id: string;
	onCardClick: (id: string) => void;
}

export const Card = ({ name, img, id, onCardClick }: Props) => {
	return (
		<div className="card-wrapper" onClick={() => onCardClick(id)}>
			<img className="card-img" src={img} alt="Album Cover" />
			{name}
		</div>
	);
};
